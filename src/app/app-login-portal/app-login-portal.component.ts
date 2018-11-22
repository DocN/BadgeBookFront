import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIURLserviceService } from '../services/apiurlservice.service';

@Component({
  selector: 'app-app-login-portal',
  templateUrl: './app-login-portal.component.html',
  styleUrls: ['./app-login-portal.component.scss']
})
export class AppLoginPortalComponent implements OnInit {

  private loginModel: any = {};

  private appList: any = {
    '0': "abc.ca",
    '1': "www.ignika.azurewebsites.net",
    '2': "cbcc.ca"
  }

  id: string;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private APIURLserviceService: APIURLserviceService) {
    this.id = '' + this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  loginAttempt() {
    this.login(this.loginModel);
  }

  login(loginModel) {
    console.log("here");
    let data = { "Email": loginModel.Email, "Password": loginModel.Password };
    const body = JSON.stringify(data);
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;"
      }
    };
    this.http.post(this.APIURLserviceService.loginURL, data, config)
      .subscribe(
        (res) => {
          window.location.href = 'http://' + this.appList[this.id] +'/?t=' + res["token"];
          //window.location.href = this.appList[this.id] + '?t=' + res["token"];
        },
        err => {
          console.log(err);
          //finish loading
        }
      );
  }
}
// commit to eugenes branch