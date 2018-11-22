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
import { PreferencesComponent } from './dashboard/preferences/preferences.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppLoginPortalComponent } from './app-login-portal/app-login-portal.component';
import { SearchComponent } from './search/search.component';
import { ViewProfilePageComponent } from './view-profile-page/view-profile-page.component';

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
    path: 'login/{id}',
    component: AppLoginPortalComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPortalComponent,
    DashboardComponent,
    PreferencesComponent,
    EditProfileComponent,
    AppLoginPortalComponent,
    SearchComponent,
    ViewProfilePageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    HttpClientModule,
    HttpModule, 
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
