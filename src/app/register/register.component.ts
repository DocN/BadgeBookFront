import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileServiceService} from '../services/profile-service.service';
import { HttpClient } from '@angular/common/http';
import {APIURLserviceService} from '../services/apiurlservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerModel: any = {};
  constructor(private router:Router, private APIURLserviceService:APIURLserviceService, private http: HttpClient) { }

  ngOnInit() {
  }

  registerUser() {
    let data = {"Email": this.registerModel.Email, "Password": this.registerModel.Password, 
    "FirstName": this.registerModel.FirstName, "LastName": this.registerModel.LastName, 
    "Country": this.registerModel.Country, "BirthDay": this.registerModel.BDate, 
    "BirthMonth":this.registerModel.BMonth, "BirthYear": this.registerModel.BYear };
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.post(this.APIURLserviceService.registerURL, data, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.router.navigate(['/login']);
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

}
