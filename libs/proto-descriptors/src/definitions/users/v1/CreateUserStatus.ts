// Original file: src/users/v1/users.proto

export const CreateUserStatus = {
  CREATE_USER_STATUS_UNSPECIFIED: 0,
  CREATE_USER_STATUS_SUCCESS: 1,
  CREATE_USER_STATUS_ERROR: 2,
} as const;

export type CreateUserStatus =
  | 'CREATE_USER_STATUS_UNSPECIFIED'
  | 0
  | 'CREATE_USER_STATUS_SUCCESS'
  | 1
  | 'CREATE_USER_STATUS_ERROR'
  | 2;

export type CreateUserStatus__Output =
  (typeof CreateUserStatus)[keyof typeof CreateUserStatus];
