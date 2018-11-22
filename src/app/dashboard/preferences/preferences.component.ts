import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SessionServiceService} from '../../services/session-service.service';
import {APIURLserviceService} from '../../services/apiurlservice.service';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  constructor(private SessionServiceService:SessionServiceService, private APIURLserviceService:APIURLserviceService, private http: HttpClient) { 
    this.SessionServiceService.refreshUserData();
  }

  ngOnInit() {
  }
  updatePreferences() {
    let data = {"FirstName": this.SessionServiceService.preferenceModel.FirstName, "LastName": this.SessionServiceService.preferenceModel.LastName, "Country": this.SessionServiceService.preferenceModel.Country,
    "BirthDay": this.SessionServiceService.preferenceModel.BirthDay, "BirthMonth": this.SessionServiceService.preferenceModel.BirthMonth, "BirthYear": this.SessionServiceService.preferenceModel.BirthYear };
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;",
    "Authorization": "Bearer " + this.SessionServiceService.JWTToken
    }
    }; 
    this.http.post(this.APIURLserviceService.editUserURL, data, config)
    .subscribe(
    (res) => {
      console.log(res);
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

}
