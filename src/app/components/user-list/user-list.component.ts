import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

import { User } from 'src/app/services/model';
import { AppState, selectUsers } from 'src/app/store';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users$: Observable<User[]>;

  displayedColumns = ['name', 'email', 'role', 'status'];

  constructor(private store: Store<AppState>, private router: Router) {
    this.users$ = this.store.select(selectUsers);
  }

  viewUserDetails(row: User) {
    this.router.navigate(['/users', row.id]);
  }
}
