import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIURLserviceService {

  //domains
  public domain = "https://localhost:44331";
  //public domain ="https://badgeapi.azurewebsites.net";
  public loginURL = this.domain + "/api/auth/login";
  public userDataURL = this.domain + "/api/personalprofile";
  public editUserURL = this.domain + "/api/personalprofile/edituser";
  public getDescriptionURL = this.domain + "/api/personalprofile/getDescription";
  public editProfileDescURL = this.domain + "/api/personalprofile/editDescription";
  public searchURL = this.domain + "/api/search";
  public getProfileDataURL = this.domain + "/api/profile/";
  public changePasswordURL = this.domain + "/api/auth/changepassword";
  public resetPasswordURL = this.domain + "/api/auth/resetPassword";
  public resetPasswordwTokenURL = this.domain + "/api/auth/resetPasswordwtoken";
  public getMsgURL = this.domain + "/api/message/getmsgs";
  public setReadMsgURL = this.domain + "/api/message/setReadStatus";
  public getEmailAddressfromUIDURL = this.domain + "/api/message/getUserEmail";
  public sendMsgURL = this.domain + "/api/message/sendMsg";
  constructor() { }
}
