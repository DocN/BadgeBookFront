import { Component, OnInit } from '@angular/core';
import {SessionServiceService} from '../services/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private SessionServiceService: SessionServiceService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.SessionServiceService.preferenceModel = {};
    this.SessionServiceService.JWTToken = "";
    this.SessionServiceService.expire = "";
    this.SessionServiceService.loggedIn = false;
    this.SessionServiceService.userData = "";
    this.SessionServiceService.loadedUserData = false;
    this.SessionServiceService.noUserData = false;
    this.router.navigate(['']);
  }
}
