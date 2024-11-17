import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, map, tap } from 'rxjs';

import { UserActions, selectUser } from '../store';

/**
 * Resolves an user data by fairing the 'userLoad' action if the user is empty or returning user's data if it's not.
 * Navigates to /users if user id is empty
 */
export const userDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  const userId = route.paramMap.get('id');

  if (!userId) {
    return router.navigateByUrl('/users');
  }

  return store.select(selectUser).pipe(
    tap((user) => {
      if (user?.id !== userId) {
        store.dispatch(UserActions.userLoad({ id: userId }));
      }
    }),
    map((user) => !!user),
    filter(Boolean),
    first()
  );
};
