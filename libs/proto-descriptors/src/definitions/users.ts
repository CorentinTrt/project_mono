import type * as grpc from '@grpc/grpc-js';
import type {
  EnumTypeDefinition,
  MessageTypeDefinition,
} from '@grpc/proto-loader';

import type {
  UsersServiceClient as _users_v1_UsersServiceClient,
  UsersServiceDefinition as _users_v1_UsersServiceDefinition,
} from './users/v1/UsersService';

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  users: {
    v1: {
      CreateUserRequest: MessageTypeDefinition;
      CreateUserResponse: MessageTypeDefinition;
      CreateUserStatus: EnumTypeDefinition;
      GetServiceStatusRequest: MessageTypeDefinition;
      GetServiceStatusResponse: MessageTypeDefinition;
      GetUserRequest: MessageTypeDefinition;
      GetUserResponse: MessageTypeDefinition;
      GetUsersRequest: MessageTypeDefinition;
      GetUsersResponse: MessageTypeDefinition;
      StatusReponse: MessageTypeDefinition;
      User: MessageTypeDefinition;
      UsersService: SubtypeConstructor<
        typeof grpc.Client,
        _users_v1_UsersServiceClient
      > & { service: _users_v1_UsersServiceDefinition };
    };
  };
}
