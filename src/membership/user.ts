
export type RoleName = 'administrator' | 'company_admin' | 'user' | 'canvasser'

export interface IUser {
  id: number;
  orgId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  name: string;
  email: string;
}

export interface UpdateUserInput {
  name?: string
  password?: string
  passwordRecovery?: {
    token: string;
    tokenExpiry: Date;
  };
}

export interface CreateUserInput {
  orgId: number
  name: string
  email: string
  role: RoleName
  password?: string
}
