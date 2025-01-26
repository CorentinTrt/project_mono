// Original file: src/users/v1/users.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  CreateUserRequest as _users_v1_CreateUserRequest,
  CreateUserRequest__Output as _users_v1_CreateUserRequest__Output,
} from '../../users/v1/CreateUserRequest';
import type {
  CreateUserResponse as _users_v1_CreateUserResponse,
  CreateUserResponse__Output as _users_v1_CreateUserResponse__Output,
} from '../../users/v1/CreateUserResponse';
import type {
  GetServiceStatusRequest as _users_v1_GetServiceStatusRequest,
  GetServiceStatusRequest__Output as _users_v1_GetServiceStatusRequest__Output,
} from '../../users/v1/GetServiceStatusRequest';
import type {
  GetServiceStatusResponse as _users_v1_GetServiceStatusResponse,
  GetServiceStatusResponse__Output as _users_v1_GetServiceStatusResponse__Output,
} from '../../users/v1/GetServiceStatusResponse';
import type {
  GetUserRequest as _users_v1_GetUserRequest,
  GetUserRequest__Output as _users_v1_GetUserRequest__Output,
} from '../../users/v1/GetUserRequest';
import type {
  GetUserResponse as _users_v1_GetUserResponse,
  GetUserResponse__Output as _users_v1_GetUserResponse__Output,
} from '../../users/v1/GetUserResponse';
import type {
  GetUsersRequest as _users_v1_GetUsersRequest,
  GetUsersRequest__Output as _users_v1_GetUsersRequest__Output,
} from '../../users/v1/GetUsersRequest';
import type {
  GetUsersResponse as _users_v1_GetUsersResponse,
  GetUsersResponse__Output as _users_v1_GetUsersResponse__Output,
} from '../../users/v1/GetUsersResponse';

export interface UsersServiceClient extends grpc.Client {
  CreateUser(
    argument: _users_v1_CreateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _users_v1_CreateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _users_v1_CreateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _users_v1_CreateUserRequest,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _users_v1_CreateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _users_v1_CreateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _users_v1_CreateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _users_v1_CreateUserRequest,
    callback: grpc.requestCallback<_users_v1_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;

  GetServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  GetServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  GetServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  GetServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getServiceStatus(
    argument: _users_v1_GetServiceStatusRequest,
    callback: grpc.requestCallback<_users_v1_GetServiceStatusResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUser(
    argument: _users_v1_GetUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUser(
    argument: _users_v1_GetUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUser(
    argument: _users_v1_GetUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUser(
    argument: _users_v1_GetUserRequest,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _users_v1_GetUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _users_v1_GetUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _users_v1_GetUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getUser(
    argument: _users_v1_GetUserRequest,
    callback: grpc.requestCallback<_users_v1_GetUserResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUsers(
    argument: _users_v1_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _users_v1_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _users_v1_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _users_v1_GetUsersRequest,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _users_v1_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _users_v1_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _users_v1_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _users_v1_GetUsersRequest,
    callback: grpc.requestCallback<_users_v1_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface UsersServiceHandlers
  extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<
    _users_v1_CreateUserRequest__Output,
    _users_v1_CreateUserResponse
  >;

  GetServiceStatus: grpc.handleUnaryCall<
    _users_v1_GetServiceStatusRequest__Output,
    _users_v1_GetServiceStatusResponse
  >;

  GetUser: grpc.handleUnaryCall<
    _users_v1_GetUserRequest__Output,
    _users_v1_GetUserResponse
  >;

  GetUsers: grpc.handleUnaryCall<
    _users_v1_GetUsersRequest__Output,
    _users_v1_GetUsersResponse
  >;
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<
    _users_v1_CreateUserRequest,
    _users_v1_CreateUserResponse,
    _users_v1_CreateUserRequest__Output,
    _users_v1_CreateUserResponse__Output
  >;
  GetServiceStatus: MethodDefinition<
    _users_v1_GetServiceStatusRequest,
    _users_v1_GetServiceStatusResponse,
    _users_v1_GetServiceStatusRequest__Output,
    _users_v1_GetServiceStatusResponse__Output
  >;
  GetUser: MethodDefinition<
    _users_v1_GetUserRequest,
    _users_v1_GetUserResponse,
    _users_v1_GetUserRequest__Output,
    _users_v1_GetUserResponse__Output
  >;
  GetUsers: MethodDefinition<
    _users_v1_GetUsersRequest,
    _users_v1_GetUsersResponse,
    _users_v1_GetUsersRequest__Output,
    _users_v1_GetUsersResponse__Output
  >;
}
