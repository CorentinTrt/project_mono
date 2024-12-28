import * as grpc from '@grpc/grpc-js';
import * as grpcProtoLoader from '@grpc/proto-loader';
import * as grpcReflection from '@grpc/reflection';

import type { ProtoGrpcType } from '../definitions/users';

const PROTO_PATH = __dirname + '/v1/users.proto';
const PROTO_LOADER_OPTIONS = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const USERS_PACKAGE_DEFINITION = grpcProtoLoader.loadSync(
  PROTO_PATH,
  PROTO_LOADER_OPTIONS
);

const USERS_PROTO_REFLEXION = new grpcReflection.ReflectionService(
  USERS_PACKAGE_DEFINITION
);

const USERS_PROTO_DESCRIPTOR = grpc.loadPackageDefinition(
  USERS_PACKAGE_DEFINITION
) as unknown as ProtoGrpcType;

export {
  USERS_PROTO_DESCRIPTOR,
  USERS_PROTO_REFLEXION,
  USERS_PACKAGE_DEFINITION,
};
