import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { userListResolver } from './resolvers/user-list.resolver';
import { userDetailsResolver } from './resolvers/user-details.resolver';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    resolve: {
      usersLoaded: userListResolver,
    },
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    resolve: {
      userLoaded: userDetailsResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
