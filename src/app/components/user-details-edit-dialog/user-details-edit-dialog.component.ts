import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { filter, first } from 'rxjs';

import { Maybe, User } from 'src/app/services/model';
import { AppState, selectUser, UserActions } from 'src/app/store';

@Component({
  selector: 'app-user-details-edit-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './user-details-edit-dialog.component.html',
  styleUrl: './user-details-edit-dialog.component.css',
})
export class UserDetailsEditDialogComponent {
  userDetailsForm: FormGroup;
  user: Maybe<User>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDetailsEditDialogComponent>,
    private store: Store<AppState>
  ) {
    this.userDetailsForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: [''],
      },
      {
        updateOn: 'blur',
      }
    );

    this.store
      .select(selectUser)
      .pipe(filter(Boolean), first())
      .subscribe((user) => {
        this.user = user;
        this.userDetailsForm.setValue({
          name: user.name,
          email: user.email,
          role: user.role,
        });
      });
  }

  saveUser() {
    this.store.dispatch(
      UserActions.userUpdate({
        // saveUser won't be called if the form is invalid.
        // Initial validity is possible only if the user is defined
        id: this.user!.id,
        payload: this.userDetailsForm.value,
      })
    );
    this.dialogRef.close();
  }

  get email() {
    return this.userDetailsForm.get('email');
  }

  get name() {
    return this.userDetailsForm.get('name');
  }
}
