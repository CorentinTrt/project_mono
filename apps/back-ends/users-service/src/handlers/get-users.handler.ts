import type * as grpc from '@grpc/grpc-js';

import type {
  GetUsersRequest__Output,
  GetUsersResponse,
} from '@mono/proto-descriptors';

const dummyUsers = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
  },
  {
    id: 3,
    firstname: 'John Junior',
    lastname: 'Doe',
  },
];

const getUsersHandler: grpc.handleUnaryCall<
  GetUsersRequest__Output,
  GetUsersResponse
> = (_, callback) => {
  callback(null, { message: dummyUsers });
};

export { getUsersHandler };
