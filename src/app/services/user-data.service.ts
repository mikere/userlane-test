import { Injectable } from '@angular/core';

import * as dbUserData from '../db/users.json';
import { filter, Observable, of, throwError } from 'rxjs';

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

export interface UserData {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  readonly userData = dbUserData as UserData; // API contract ensures the correctness of dbUserData

  getUsers(): Observable<User[]> {
    return of(this.userData.users);
  }

  getUser(id: string): Observable<User | undefined> {
    return of(this.findUser(id));
  }

  updateUser(id: string, payload: Partial<User>): Observable<User> {
    const user = this.findUser(id);

    if (user) {
      Object.assign(user, payload);
    }

    return user ? of(user) : throwError(() => new Error(`User not found: ${id}`));
  }

  private findUser(id: string) {
    return this.userData.users.find(user => user.id === id);
  }
}
