import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../store/user.actions';
import { filter, first, tap } from 'rxjs';
import { selectLoading } from '../store/user.selectors';

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
