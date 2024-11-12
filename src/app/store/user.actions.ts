import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../services/model';

export const UserActions = createActionGroup({
  source: 'User API',
  events: {
    usersLoad: emptyProps(),
    usersLoadSuccess: props<{ users: User[] }>(),
    usersLoadFailure: props<{ error: Error }>(),

    userLoad: props<{ id: User['id'] }>(),
    userLoadSuccess: props<{ user: User }>(),
    userLoadFailure: props<{ error: Error }>(),

    userUpdate: props<{ id: User['id']; payload: Partial<User> }>(),
    userUpdateSuccess: props<{ user: User }>(),
    userUpdateFailure: props<{ error: Error }>(),
  },
});
