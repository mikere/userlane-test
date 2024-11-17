import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { skipWhile } from 'rxjs';

import { Maybe } from 'src/app/services/model';
import { AppState, selectError } from 'src/app/store';

const snackBarDismissMs = 5000;

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
        skipWhile((err) => !err), // ignore initial empty values, notify only on subsequent
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((err: Maybe<Error>) => {
        this.snackBar.open(err?.message || 'Something went wrong', 'Dismiss', {
          duration: snackBarDismissMs,
        });
      });
  }
}
