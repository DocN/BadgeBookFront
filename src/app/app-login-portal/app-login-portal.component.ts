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
  }

  private loading = true;

  id: string;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private APIURLserviceService: APIURLserviceService) {
    this.id = '' + this.route.snapshot.paramMap.get('id');
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;"
      }
    };
    this.http.get(this.APIURLserviceService.domain + '/api/applications/active', config)
      .subscribe(
        (res) => {
          console.log(res);
          this.appList = res;
          this.loading = false;
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
  }

  loginAttempt() {
    this.login(this.loginModel);
  }

  login(loginModel) {
    
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
          console.log(res);
          this.appList.forEach(element => {
            if (element['id'] == this.id) {
              window.location.href = element['appUrl'] +'/?t=' + res["token"];
            }
          });
        },
        err => {
          console.log(err);
        }
      );
  }
}
// commit to eugenes branch