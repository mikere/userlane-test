import { Injectable } from '@angular/core';

import * as dbUserData from '../db/users.json';
import { Observable, of, throwError } from 'rxjs';
import { User, UserData } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private readonly userData = dbUserData as UserData; // API contract ensures the correctness of dbUserData

  getUsers(): Observable<User[]> {
    return of(this.userData.users);
  }

  getUser(id: string): Observable<User> {
    const user = this.findUser(id);

    return user
      ? of(user)
      : throwError(() => new Error(`User not found: ${id}`));
  }

  updateUser(id: string, payload: Partial<User>): Observable<User> {
    const user = this.findUser(id);

    if (user) {
      Object.assign(user, payload);
    }

    return user
      ? of(user)
      : throwError(() => new Error(`User not found: ${id}`));
  }

  private findUser(id: string) {
    return this.userData.users.find((user) => user.id === id);
  }
}
