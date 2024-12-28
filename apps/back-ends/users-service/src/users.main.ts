import * as grpc from '@grpc/grpc-js';

import {
  USERS_PROTO_DESCRIPTOR,
  USERS_PROTO_REFLEXION,
} from '@mono/proto-descriptors';
import {
  getServiceStatusHandler,
  createUserHandler,
  handlerGetUser,
  getUsersHandler,
} from './handlers';
import { startOtelSDK } from './user.otel';

import type { UsersServiceHandlers } from '@mono/proto-descriptors';
import { ServiceNames } from '@mono/services';

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ? Number(process.env.PORT) : 5001;

startOtelSDK(ServiceNames.USERS_SERVICE);

const handlers: UsersServiceHandlers = {
  GetServiceStatus: getServiceStatusHandler,
  CreateUser: createUserHandler,
  GetUser: handlerGetUser,
  GetUsers: getUsersHandler,
};

const addServices = (server: grpc.Server) => {
  server.addService(
    USERS_PROTO_DESCRIPTOR.users.v1.UsersService.service,
    handlers
  );

  USERS_PROTO_REFLEXION.addToServer(server);
};

const getServer = () => {
  const server = new grpc.Server({
    'grpc.max_receive_message_length': 1 * 1024 * 1024,
  });

  addServices(server);

  return server;
};

const server = getServer();

server.bindAsync(
  `${HOST}:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (error, _) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log(
      `\x1b[1;35m users-service\x1b[0m - gRPC server started on ${HOST}:${PORT}`
    );
  }
);
