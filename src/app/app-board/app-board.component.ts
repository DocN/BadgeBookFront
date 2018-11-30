import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIURLserviceService } from '../services/apiurlservice.service';
import {SessionServiceService} from '../services/session-service.service';


@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {

  private appList: any = {};
  private loading = true;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private APIURLserviceService: APIURLserviceService,
    private SessionServiceService: SessionServiceService) {
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
          if (this.SessionServiceService.loggedIn) {
            this.appList.forEach(element => {
              element['appUrl'] = element['appUrl'] +'/?t=' + this.SessionServiceService.JWTToken;
            });
          }
          this.loading = false;
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
  }


}
