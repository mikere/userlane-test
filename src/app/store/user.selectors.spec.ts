import { AppState, selectUser, selectUsers, UserState } from '.';

describe('User Selectors', () => {
  const userState: UserState = {
    users: [
      {
        id: '1',
        name: 'User 1',
        email: 'email@example.com',
        status: 'offline',
        role: 'guest',
        joiningDate: '2024-11-22',
      },
      {
        id: '2',
        name: 'User 2',
        email: 'email2@example.com',
        status: 'online',
        role: 'guest',
        joiningDate: '2024-11-22',
      },
    ],
    loading: true,
  };

  describe('selectUsers', () => {
    it('should select the list of users', () => {
      const result = selectUsers.projector(userState);
      expect(result).toBe(userState.users);
    });
  });

  describe('selectUser', () => {
    it('should select the user', () => {
      userState.user = userState.users[0];

      const result = selectUser.projector(userState);
      expect(result).toBe(userState.users[0]);
    });
  });
});
