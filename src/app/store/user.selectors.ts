import { createSelector, State } from '@ngrx/store';
import { User } from '../services/model';

export interface UsersState {
  users: User[];
  user?: User;
  loading: boolean;
  error?: Error;
}

export interface AppState {
  users: UsersState;
}

export const selectUsersState = (state: AppState) => state.users;

export const selectLoading = createSelector(
  selectUsersState,
  (state: UsersState) => state.loading
);

export const selectError = createSelector(
  selectUsersState,
  (state: UsersState) => state.error
);

export const selectUser = createSelector(
  selectUsersState,
  (state: UsersState) => state.user
);

export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);
