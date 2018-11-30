import { Component, OnInit } from '@angular/core';
import {SessionServiceService } from '../services/session-service.service';
import {APIURLserviceService} from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  private sendMsgModel: any = {};
  private userID = "";
  constructor(private route: ActivatedRoute, private SessionServiceService:SessionServiceService, private http:HttpClient, private APIURLserviceService:APIURLserviceService, private router:Router) {
    this.userID = '' + this.route.snapshot.paramMap.get('id');
    this.getEmailAddress();
  }

  ngOnInit() {
  }

  getEmailAddress() {
    var data = {"UID": this.userID};
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.post(this.APIURLserviceService.getEmailAddressfromUIDURL, data, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.sendMsgModel.Email = res["Data"];
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }
  //getEmailAddressfromUIDURL

  sendMessage() {
    let data = { "MsgToUID": this.userID,"Subject": this.sendMsgModel.Subject,  "Msg":this.sendMsgModel.Msg };
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;",
    "Authorization": "Bearer " + this.SessionServiceService.JWTToken
    }
    }; 
    this.http.post(this.APIURLserviceService.sendMsgURL, data, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.router.navigate(['dashboard']);
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }
}
