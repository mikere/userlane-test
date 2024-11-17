import { UserEffects } from './user.effects';
import { UserState } from './user.selectors';
import { userReducer } from './user.reducer';

export interface AppState {
  user: UserState;
}

export const reducers = {
  user: userReducer,
};

export const effects = [UserEffects];

export * from './user.selectors';
export * from './user.actions';
