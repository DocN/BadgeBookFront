import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {APIURLserviceService} from '../../services/apiurlservice.service';
import {SessionServiceService} from '../../services/session-service.service'; 
import {ReadmsgserviceService} from '../../services/readmsgservice.service';
import {DashrouteService} from '../../services/dashroute.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  private inboxMsgs = "";
  private loadedMsgs = false;
  constructor(private router:Router, private APIURLserviceService:APIURLserviceService, private http: HttpClient, private SessionServiceService:SessionServiceService, 
    private ReadmsgserviceService:ReadmsgserviceService, private DashrouteService:DashrouteService) { 
  }

  ngOnInit() {
    this.loadedMsgs = false;
    this.loadInbox();
  }

  loadInbox() {
    let data = {};
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;",
    "Authorization": "Bearer " + this.SessionServiceService.JWTToken
    }
    }; 
    this.http.get(this.APIURLserviceService.getMsgURL, config)
    .subscribe(
    (res) => {
      this.inboxMsgs = res["Data"];
      this.loadedMsgs = true;
      console.log(this.inboxMsgs);
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

  readMessage(msgdata) {
    let data = {"MsgID": msgdata.Msg.MessageID};
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;",
    "Authorization": "Bearer " + this.SessionServiceService.JWTToken
    }
    }; 
    this.http.post(this.APIURLserviceService.setReadMsgURL,data, config)
    .subscribe(
    (res) => {
      this.ReadmsgserviceService.currentMsgData = msgdata;
      this.DashrouteService.dashRoute = "readmsg";
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

}
