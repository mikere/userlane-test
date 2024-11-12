import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { User } from '../services/model';

export interface UserState {
  users: User[];
  user?: User;
  loading: boolean;
  error?: Error;
}

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);
