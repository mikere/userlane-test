import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectLoading } from './store/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Userlane Angular Task';
}
