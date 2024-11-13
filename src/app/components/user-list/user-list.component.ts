import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from 'src/app/services/model';
import { AppState, selectUsers } from 'src/app/store';

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
    this.users$ = this.store.select(selectUsers);
  }
}
