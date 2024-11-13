import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { skip } from 'rxjs';

import { Maybe } from 'src/app/services/model';
import { AppState } from 'src/app/store';
import { selectError } from 'src/app/store/user.selectors';

const SNACKBAR_DISMISS_MS = 5000;

@Component({
  selector: 'app-error-tracker',
  standalone: true,
  imports: [MatSnackBarModule],
  template: '',
})
export class ErrorTrackerComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.store
      .select(selectError)
      .pipe(
        skip(1), // ignore current value, notify only on subsequent
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((err: Maybe<Error>) => {
        this.snackBar.open(err?.message || 'Something went wrong', 'Dismiss', {
          duration: SNACKBAR_DISMISS_MS,
        });
      });
  }
}
