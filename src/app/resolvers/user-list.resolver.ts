import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs';

import { UserActions, selectLoading } from '../store';

/**
 * Resolves a list of users by fairing the 'usersLoad' action if the list isn't already loading
 */
export const userListResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store);
  return store.select(selectLoading).pipe(
    tap((loading) => {
      if (!loading) {
        store.dispatch(UserActions.usersLoad());
      }
    }),
    filter((loading) => !loading),
    first()
  );
};
