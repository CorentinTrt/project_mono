import type * as grpc from '@grpc/grpc-js';

import type {
  CreateUserRequest__Output,
  CreateUserRequest,
  CreateUserResponse,
} from '@mono/proto-descriptors';

const createUserHandler: grpc.handleUnaryCall<
  CreateUserRequest__Output,
  CreateUserResponse
> = (_, callback) => {
  callback(null, {
    status: 'CREATE_USER_STATUS_UNSPECIFIED',
    message: 'User not created',
  });
};

export { createUserHandler };
