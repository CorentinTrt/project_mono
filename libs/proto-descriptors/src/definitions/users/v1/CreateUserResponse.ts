// Original file: src/users/v1/users.proto

import type { CreateUserStatus as _users_v1_CreateUserStatus, CreateUserStatus__Output as _users_v1_CreateUserStatus__Output } from '../../users/v1/CreateUserStatus';

export interface CreateUserResponse {
  'status'?: (_users_v1_CreateUserStatus);
  'message'?: (string);
}

export interface CreateUserResponse__Output {
  'status'?: (_users_v1_CreateUserStatus__Output);
  'message'?: (string);
}
