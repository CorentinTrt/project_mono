// Original file: src/users/v1/users.proto

import type { Long } from '@grpc/proto-loader';

export interface GetUserRequest {
  userId?: number | string | Long;
}

export interface GetUserRequest__Output {
  userId?: Long;
}
