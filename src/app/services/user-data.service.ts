import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { cloneDeep } from 'lodash';

import { users as dbUsers } from '../db/users';
import { User } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private readonly users = cloneDeep(dbUsers) as unknown as User[]; // API contract ensures the correctness of users array

  /**
   * Get a list of users
   */
  getUsers(): Observable<User[]> {
    return of(cloneDeep(this.users)); // return a deep copy to keep the original from being manipulated by the store
  }

  /**
   * Get a user by their id
   * @param id id to get a user by
   * @returns observable resolving to an instance of User or throwing an error if a user cannot be found
   */
  getUser(id: string): Observable<User> {
    const user = this.findUser(id);

    return user
      ? of(cloneDeep(user))
      : throwError(() => new Error(`User not found: ${id}`));
  }

  /**
   * Update a user
   * @param id id of a user to update
   * @param payload object containing user properties to update
   * @returns observable resolving to the updated instance of User or throwing an error if a user cannot be found
   */
  updateUser(id: string, payload: Partial<Omit<User, 'id'>>): Observable<User> {
    const user = this.findUser(id);

    if (user) {
      Object.assign(user, payload);
    }

    return user
      ? of(cloneDeep(user))
      : throwError(() => new Error(`User not found: ${id}`));
  }

  private findUser(id: User['id']) {
    return this.users.find((user) => user.id === id);
  }
}
