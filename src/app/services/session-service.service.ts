import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

//services
import { APIURLserviceService } from '../services/apiurlservice.service';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  public preferenceModel: any = {};
  public JWTToken = "";
  public expire = "";
  public loggedIn = false;
  public userData : any;
  public loadedUserData = false;
  public noUserData = false;
  private jwtType = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
  public role;

  constructor(private router:Router, private http: HttpClient, private APIURLserviceService:APIURLserviceService) {

  }

  login(loginModel) {
    console.log("here");
    let data = {"Email": loginModel.Email, "Password": loginModel.Password };
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.post(this.APIURLserviceService.loginURL, data, config)
    .subscribe(
    (res) => {
      this.JWTToken = res["token"];
      localStorage.setItem('BadgeBookTokenJWT', this.JWTToken);
      this.expire = res["expiration"];
      this.decodeToken(res['token']);
      this.loggedIn = true;
      this.getUserData();
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

  getUserData() {
    console.log("get user");
    if(this.loggedIn == false) {
      console.log("not logged in");
      return;
    }
    var config = {headers : {
    "Authorization": "Bearer " + this.JWTToken
    }
    }; 
    this.http.get(this.APIURLserviceService.userDataURL, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.userData = res;
      this.loadedUserData = true;
      this.noUserData = false;
      this.loadPreferenceData();
      this.router.navigate(['/dashboard']);
    },
    err => {
      console.log(err);
      this.noUserData = true;
      //finish loading
    });
  }


  refreshUserData() {
    this.loadedUserData = false;
    console.log("get user");
    if(this.loggedIn == false) {
      console.log("not logged in");
      return;
    }
    var config = {headers : {
    "Authorization": "Bearer " + this.JWTToken
    }
    }; 
    this.http.get(this.APIURLserviceService.userDataURL, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.userData = res;
      this.loadedUserData = true;
      this.noUserData = false;
      this.loadPreferenceData();
    },
    err => {
      console.log(err);
      this.noUserData = true;
      //finish loading
    });
  }

  loadPreferenceData() {
    this.preferenceModel.Email = this.userData.Data.Email;
    this.preferenceModel.UID = this.userData.Data.UID;
    this.preferenceModel.Username = this.userData.Data.Username;
    this.preferenceModel.BirthDay = this.userData.Data.BirthDay;
    this.preferenceModel.BirthMonth = this.userData.Data.BirthMonth;
    this.preferenceModel.BirthYear = this.userData.Data.BirthYear;

    this.preferenceModel.FirstName = this.userData.Data.UserData.FirstName;
    this.preferenceModel.LastName = this.userData.Data.UserData.LastName;
    this.preferenceModel.Country = this.userData.Data.UserData.Country;
  }

  decodeToken(token) {
    let jwt = token;
    let jwtData = jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    console.log(decodedJwtData);
    if(decodedJwtData != null) {
      this.role = decodedJwtData[this.jwtType];
      console.log(this.role);
    }
    let isAdmin = decodedJwtData.admin
  }
}
