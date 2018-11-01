import { BbService } from './bb.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CallsComponent } from './calls/calls.component';
import { LoginsComponent } from './logins/logins.component';
import { VpnsComponent } from './vpns/vpns.component';
import { MachinesComponent } from './machines/machines.component';
import { UsersComponent } from './users/users.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CallsComponent,
    LoginsComponent,
    VpnsComponent,
    MachinesComponent,
    UsersComponent,
    HelpdeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
