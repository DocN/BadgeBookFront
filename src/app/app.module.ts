import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//routes
import {RouterModule, Routes} from '@angular/router';
//http
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes:Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LoginPortalComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPortalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    HttpClientModule,
    HttpModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
