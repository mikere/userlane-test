import { UserState } from './user.selectors';
import { initialState as userInitialState, userReducer } from './user.reducer';
import { UserActions } from './user.actions';
import { User } from '../services/model';
import { error } from 'console';

const users = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
] as User[];

describe('userReducer', () => {
  let initialState: UserState;

  beforeEach(() => {
    initialState = userInitialState;
  });

  describe('usersLoad', () => {
    it('should update loading and error properties', () => {
      const action = UserActions.usersLoad();

      const expectedState: UserState = {
        users: initialState.users,
        loading: true,
        error: undefined,
      };

      expect(userReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('usersLoadSuccess', () => {
    it('should update users and loading properties', () => {
      const action = UserActions.usersLoadSuccess({ users });

      initialState.loading = true; // set by 'usersLoad'

      const expectedState: UserState = {
        ...initialState,
        users,
        loading: false,
      };

      expect(userReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('usersLoadFailure', () => {
    it('should update error and loading properties', () => {
      const error = Error('test error message');
      const action = UserActions.usersLoadFailure({ error });

      initialState.loading = true; // set by 'usersLoad'

      const expectedState: UserState = {
        ...initialState,
        loading: false,
        error,
      };

      expect(userReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('userLoad', () => {
    it('should update user, loading, and error properties', () => {
      const action = UserActions.userLoad({ id: '1' });

      const expectedState = {
        ...initialState,
        user: undefined,
        loading: true,
        error: undefined,
      };

      expect(userReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
