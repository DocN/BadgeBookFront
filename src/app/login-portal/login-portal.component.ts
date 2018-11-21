import { Component, OnInit } from '@angular/core';
import {SessionServiceService} from '../services/session-service.service';
@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  private loginModel: any = {};

  constructor(private SessionServiceService: SessionServiceService) { }

  ngOnInit() {
  }

  loginAttempt() {
    this.SessionServiceService.login(this.loginModel);
  }

}
