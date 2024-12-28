import * as grpc from '@grpc/grpc-js';
import { context, Tracer, trace } from '@opentelemetry/api';
import path from 'path';

import { extractOtelCtx, grpcTextMapGetter } from '@mono/services';
import { OtelTracer } from '../user.otel';
import { UserRepository } from '../users.repository';

import type { GetUserRequest, GetUserResponse } from '@mono/proto-descriptors';

const tracer: Tracer = new OtelTracer().getTracer();

const handlerGetUser: grpc.handleUnaryCall<GetUserRequest, GetUserResponse> = (
  call,
  callback
) => {
  const ctxParent = extractOtelCtx(call.metadata, grpcTextMapGetter);
  const span = tracer.startSpan('handlerGetUser', {}, ctxParent);

  return context.with(trace.setSpan(context.active(), span), () => {
    span.setAttribute('source.file.name', path.basename(__filename, '.ts'));

    const userId = Number(call.request.userId);
    if (userId == 0) {
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: "Missing or misspelled 'userId' argument. Defaulting to 0",
      });
      span.end();
      return;
    }

    const user = UserRepository.read({ userId: userId });
    if (!user) {
      callback({
        code: grpc.status.NOT_FOUND,
        details: `User not found with 'userId: ${userId}`,
      });
      span.end();
      return;
    }

    callback(null, { message: user });
    span.end();
  });
};

export { handlerGetUser };
