import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { UserDataService } from '../services/user-data.service';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userDataService = inject(UserDataService);

  usersLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.usersLoad),
      exhaustMap(() =>
        this.userDataService.getUsers().pipe(
          map((users) => UserActions.usersLoadSuccess({ users })),
          catchError((error) => of(UserActions.usersLoadFailure({ error })))
        )
      )
    )
  );

  userLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userLoad),
      exhaustMap(({ id }) =>
        this.userDataService.getUser(id).pipe(
          map((user) => UserActions.userLoadSuccess({ user })),
          catchError((error) => of(UserActions.userLoadFailure({ error })))
        )
      )
    )
  );

  userUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userUpdate),
      exhaustMap(({ id, payload }) =>
        this.userDataService.updateUser(id, payload).pipe(
          map((user) => UserActions.userUpdateSuccess({ user })),
          catchError((error) => of(UserActions.userUpdateFailure({ error })))
        )
      )
    )
  );
}
