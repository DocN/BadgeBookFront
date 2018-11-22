import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIURLserviceService {

  //domains
  public domain = "https://localhost:44331";
  public loginURL = this.domain + "/api/auth/login";
  public userDataURL = this.domain + "/api/personalprofile";
  public editUserURL = this.domain + "/api/personalprofile/edituser";
  public getDescriptionURL = this.domain + "/api/personalprofile/getDescription";
  public editProfileDescURL = this.domain + "/api/personalprofile/editDescription";
  public searchURL = this.domain + "/api/search";
  constructor() { }
}
