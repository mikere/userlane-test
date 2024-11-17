import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { UserEffects } from './user.effects';
import { UserDataService } from '../services/user-data.service';
import { User } from '../services/model';
import { UserActions } from './user.actions';

describe('UsersEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;
  let userDataService: UserDataService;
  let users: User[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        UserDataService,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(UserEffects);
    userDataService = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('usersLoad$', () => {
    beforeEach(() => {
      users = [
        {
          id: '1',
          name: 'User 1',
          email: 'email@example.com',
          status: 'offline',
          role: 'guest',
          joiningDate: '2024-11-22',
        },
      ];
    });

    it('should call getUsers upon usersLoad action', () => {
      spyOn(userDataService, 'getUsers').and.returnValue(of(users));
      actions$ = of(UserActions.usersLoad());
      effects.usersLoad$.subscribe(() => {
        expect(userDataService.getUsers).toHaveBeenCalled();
      });
    });

    it('should return a usersLoadSuccess action when users are successfully loaded', () => {
      spyOn(userDataService, 'getUsers').and.returnValue(of(users));
      actions$ = of(UserActions.usersLoad());
      effects.usersLoad$.subscribe((result) => {
        expect(result).toEqual({
          type: UserActions.usersLoadSuccess.type,
          users,
        });
      });
    });

    it('should return a usersLoadFailure action when there was an error loading users', () => {
      const error = Error('error');
      spyOn(userDataService, 'getUsers').and.returnValue(
        throwError(() => error)
      );
      actions$ = of(UserActions.usersLoad());
      effects.usersLoad$.subscribe((result) => {
        expect(result).toEqual({
          type: UserActions.usersLoadFailure.type,
          error,
        });
      });
    });
  });
});
