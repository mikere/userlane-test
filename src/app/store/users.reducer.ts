import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { UserState } from './user.selectors';

export const initialState: UserState = {
  users: [],
  loading: false,
};

export const userReducer = createReducer<UserState>(
  initialState,

  // Loading list of users
  on(UserActions.usersLoad, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),
  on(UserActions.usersLoadSuccess, (state, { users }) => {
    return {
      ...state,
      users,
      loading: false,
    };
  }),
  on(UserActions.usersLoadFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Loading user's data
  on(UserActions.userLoad, (state) => ({
    ...state,
    user: undefined,
    loading: true,
    error: undefined,
  })),
  on(UserActions.userLoadSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(UserActions.userLoadFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Updating user's data
  on(UserActions.userUpdate, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),
  on(UserActions.userUpdateSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(UserActions.userUpdateFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
