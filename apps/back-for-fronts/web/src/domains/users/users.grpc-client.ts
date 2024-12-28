import * as grpc from '@grpc/grpc-js';
import { SpanKind } from '@opentelemetry/api';
import path from 'path';

import { propagateCtxForGRPC } from '@mono/services';
import { USERS_PROTO_DESCRIPTOR } from '@mono/proto-descriptors';
import { OtelTracer } from '../../web.otel';

import type { GetUserRequest, GetUserResponse } from '@mono/proto-descriptors';

const usersServiceClient = new USERS_PROTO_DESCRIPTOR.users.v1.UsersService(
  'localhost:5001',
  grpc.credentials.createInsecure()
);
const tracer = new OtelTracer().getTracer();

const gRPCGetUser = (params: GetUserRequest): Promise<GetUserResponse> => {
  return tracer.startActiveSpan(
    'gRPCGetUser',
    { kind: SpanKind.CLIENT },
    async (span) => {
      span.setAttribute('source.file.name', path.basename(__filename, '.ts'));

      const metadata = propagateCtxForGRPC();

      return new Promise<GetUserResponse>((resolve, reject) => {
        usersServiceClient.getUser(
          params,
          metadata,
          (error, response: GetUserResponse) => {
            if (error) {
              span.end();
              reject(error);
              return;
            }
            span.end();
            resolve(response);
          }
        );
      });
    }
  );
};

export { gRPCGetUser };
