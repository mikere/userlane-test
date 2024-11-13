import { Injectable } from '@angular/core';

import { users as dbUsers } from '../db/users';
import { Observable, of, throwError } from 'rxjs';
import { User } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private readonly users: User[] = dbUsers.map((dbUser) => ({ ...dbUser })); // API contract ensures the correctness of users array

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: string): Observable<User> {
    const user = this.users.find((user) => user.id === id);

    return user
      ? of(user)
      : throwError(() => new Error(`User not found: ${id}`));
  }

  updateUser(id: string, payload: Partial<User>): Observable<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex >= 0) {
      this.users[userIndex] = Object.assign({}, this.users[userIndex], payload);
      return of(this.users[userIndex]);
    }

    return throwError(() => new Error(`User not found: ${id}`));
  }
}
