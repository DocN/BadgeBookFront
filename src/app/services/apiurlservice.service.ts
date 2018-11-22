import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIURLserviceService {

  public domain = "https://localhost:44331";
  public loginURL = this.domain + "/api/auth/login";
  public userDataURL = this.domain + "/api/personalprofile";
  public editUserURL = this.domain + "/api/personalprofile/edituser";
  constructor() { }
}
