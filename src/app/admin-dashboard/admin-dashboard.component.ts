import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIURLserviceService } from '../services/apiurlservice.service';
import { SessionServiceService } from '../services/session-service.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  private appList: any = {};
  private loading = true;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private APIURLserviceService: APIURLserviceService,
    private SessionServiceService: SessionServiceService) {
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;",
        "Authorization": "Bearer " + this.SessionServiceService.JWTToken
      }
    };
    this.http.get(this.APIURLserviceService.domain + '/api/applications', config)
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

  updateItem(app) {

    let data = app;
    if (data.approved) {
      data.approved = false;
    } else {
      data.approved = true;
    }
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;",
        "Authorization": "Bearer " + this.SessionServiceService.JWTToken
      }
    };
    console.log(data);

    this.http.put(this.APIURLserviceService.domain + '/api/applications/' + app['id'], data, config)
      .subscribe(
        (res) => {
          console.log(res);

        },
        err => {
          console.log(err);
        }
      );
  }

  deleteItem(app) {
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;",
        "Authorization": "Bearer " + this.SessionServiceService.JWTToken
      }
    };
    this.http.delete(this.APIURLserviceService.domain + '/api/applications/' + app['id'], config)
      .subscribe(
        (res) => {
          console.log(res);
          this.appList = this.appList.filter(c => c!== app);
        },
        err => {
          console.log(err);
        }
      );
  }
}
