import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { User } from '../../services/model';
import { AppState, selectUsers } from '../../store/user.selectors';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store
      .select(selectUsers)
      .pipe(tap((users) => console.log(users)));
  }
}
