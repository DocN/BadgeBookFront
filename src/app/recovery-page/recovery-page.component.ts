import { Component, OnInit } from '@angular/core';
import {APIURLserviceService} from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recovery-page',
  templateUrl: './recovery-page.component.html',
  styleUrls: ['./recovery-page.component.scss']
})
export class RecoveryPageComponent implements OnInit {
  private newPassword: any = {};
  private recoveryEmail = "";
  private requested = false;
  constructor(private APIURLserviceService:APIURLserviceService, private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  recoverEmail() {
    let data = { "Email": this.recoveryEmail };
    const body = JSON.stringify(data);
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;"
      }
    };
    this.http.post(this.APIURLserviceService.resetPasswordURL, data, config)
      .subscribe(
        (res) => {
          this.requested = true;
        },
        err => {
          console.log(err);
          //finish loading
        }
      );
  }
  resetPassword() {
    let data = { "Email": this.recoveryEmail, "Token": this.newPassword.token, "NewPassword": this.newPassword.NewPassword };
    const body = JSON.stringify(data);
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;"
      }
    };
    this.http.post(this.APIURLserviceService.resetPasswordwTokenURL, data, config)
      .subscribe(
        (res) => {
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
          //finish loading
        }
      );
  }
}

