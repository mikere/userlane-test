import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/model';
import { AppState, selectUser } from 'src/app/store/user.selectors';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  user$: Observable<User | undefined>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(selectUser);
  }
}