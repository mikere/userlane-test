import { UserState } from './user.selectors';
import { userReducer } from './users.reducer';

export interface AppState {
  user: UserState;
}

export const reducers = {
  user: userReducer,
};
