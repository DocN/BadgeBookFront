import { Component, OnInit } from '@angular/core';
import { APIURLserviceService } from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.scss']
})
export class AppRegistrationComponent implements OnInit {

  private user : any  = {
    Name : "",
    Description : "",
    ImageUrl : "",
    AppUrl : ""
  }


  private result : any = {
    appId : "",
    appToken : ""

  }

  private response = false;
  constructor(private http: HttpClient, private APIURLserviceService:APIURLserviceService) { }

 

  ngOnInit() {
  }

  registerApp () {
    let data = this.user;
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.post(this.APIURLserviceService.domain + '/api/applications', data, config)
    .subscribe(
    (res) => {
      this.result.appId = res["id"];
      this.result.appToken = res["token"];
      this.response = true;
      console.log(this.response)
     console.log(res);
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

}
