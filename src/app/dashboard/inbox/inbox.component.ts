import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {APIURLserviceService} from '../../services/apiurlservice.service';
import {SessionServiceService} from '../../services/session-service.service'; 
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  private inboxMsgs = "";
  private loadedMsgs = false;
  constructor(private router:Router, private APIURLserviceService:APIURLserviceService, private http: HttpClient, private SessionServiceService:SessionServiceService) { 
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

  readMessage() {
    
  }

}
