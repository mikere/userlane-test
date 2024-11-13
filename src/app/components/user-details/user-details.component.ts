import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RenderRolePipe } from 'src/app/pipes/render-role.pipe';
import { RenderStatusPipe } from 'src/app/pipes/render-status.pipe';
import { Maybe, User } from 'src/app/services/model';
import { AppState, selectUser } from 'src/app/store';
import { UserDetailsEditDialogComponent } from '../user-details-edit-dialog/user-details-edit-dialog.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    RenderRolePipe,
    RenderStatusPipe,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  user$: Observable<Maybe<User>>;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.user$ = this.store.select(selectUser);
  }

  editUser() {
    this.dialog.open(UserDetailsEditDialogComponent);
  }
}
