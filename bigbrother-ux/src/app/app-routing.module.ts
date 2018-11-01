import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { CallsComponent } from './calls/calls.component';
import { MachinesComponent } from './machines/machines.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginsComponent } from './logins/logins.component';
import { VpnsComponent } from './vpns/vpns.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'machines',
    component: MachinesComponent
  },
  {
    path: 'logins',
    component: LoginsComponent
  },
  {
    path: 'calls',
    component: CallsComponent
  },
  {
    path: 'vpns',
    component: VpnsComponent
  },
  {
    path: 'helpdesk',
    component: HelpdeskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
