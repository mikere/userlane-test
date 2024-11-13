export type UserRole = 'admin' | 'member' | 'guest';

export type UserStatus = 'online' | 'offline' | 'dnd';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joiningDate: string;
}

export type Maybe<T> = T | undefined;
