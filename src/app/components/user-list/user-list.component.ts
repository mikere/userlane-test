import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { User } from 'src/app/services/model';
import { AppState, selectUsers } from 'src/app/store';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RenderRolePipe } from 'src/app/pipes/render-role.pipe';
import { RenderStatusPipe } from 'src/app/pipes/render-status.pipe';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    RenderRolePipe,
    RenderStatusPipe,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  displayedColumns = ['name', 'email', 'role', 'status'];
  userListDataSource = new MatTableDataSource<User>();

  filterControl = new FormControl('');

  constructor(private store: Store<AppState>, private router: Router) {
    this.store
      .select(selectUsers)
      .pipe(takeUntilDestroyed())
      .subscribe((users) => {
        this.userListDataSource.data = users;
      });
  }

  viewUserDetails(row: User) {
    this.router.navigate(['/users', row.id]);
  }

  applyFilter() {
    this.userListDataSource.filter = this.filterControl.value || '';
  }
}
