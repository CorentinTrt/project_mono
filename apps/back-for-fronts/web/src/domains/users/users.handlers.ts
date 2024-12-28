import {
  context,
  defaultTextMapGetter,
  SpanKind,
  SpanStatusCode,
  trace,
} from '@opentelemetry/api';
import path from 'path';

import { gRPCGetUser } from './users.grpc-client';
import { OtelTracer } from '../../web.otel';
import {
  ErrorResponse,
  SuccessResponses,
  mapGrpcErrorToHttp,
} from '@mono/commons';
import { extractOtelCtx } from '@mono/services';

import type { FastifyReply, FastifyRequest } from 'fastify';
import type { GetUserRequest } from '@mono/proto-descriptors';

const tracer = new OtelTracer().getTracer();

const handlerGetUser = async (
  request: FastifyRequest<{ Querystring: GetUserRequest }>,
  reply: FastifyReply
) => {
  const ctxParent = extractOtelCtx(
    { traceparent: request.headers['traceparent-id'] as string },
    defaultTextMapGetter
  );
  const span = tracer.startSpan(
    'handlerGetUser',
    { kind: SpanKind.SERVER },
    ctxParent
  );

  return context.with(trace.setSpan(context.active(), span), async () => {
    span.setAttribute('source.file.name', path.basename(__filename, '.ts'));

    const userId = Number(request.query.userId);
    const queryParams = request.query;

    if (!userId) {
      const errorResponse = new ErrorResponse(
        "Missing or misspelled 'userId' patameter",
        queryParams
      );

      span.setStatus({ code: SpanStatusCode.ERROR });
      span.setAttribute('error.code', 400);
      span.setAttribute('error.message', errorResponse.error.message);
      span.setAttribute(
        'error.input',
        JSON.stringify(errorResponse.error.input)
      );

      reply.code(400).send(errorResponse);
      span.end();
      return;
    }

    try {
      const response = await gRPCGetUser({ userId });
      span.setStatus({ code: SpanStatusCode.OK });
      return reply.code(200).send(new SuccessResponses(response.message));
    } catch (error) {
      const { code, message } = mapGrpcErrorToHttp(error.code, error.details);
      const errorResponse = new ErrorResponse(message, queryParams);

      span.setStatus({ code: SpanStatusCode.ERROR });
      span.setAttribute('error.code', code);
      span.setAttribute('error.message', message);
      span.setAttribute(
        'error.input',
        JSON.stringify(errorResponse.error.input)
      );

      return reply.code(Number(code)).send(errorResponse);
    } finally {
      span.end();
    }
  });
};

export { handlerGetUser };
