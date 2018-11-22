import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';

//services
import { APIURLserviceService } from '../../services/apiurlservice.service';
import {SessionServiceService} from '../../services/session-service.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  name = 'Angular 6';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  constructor(private SessionServiceService:SessionServiceService, private APIURLserviceService:APIURLserviceService, private http: HttpClient) {

  }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;",
    "Authorization": "Bearer " + this.SessionServiceService.JWTToken
    }
    }; 
    this.http.get(this.APIURLserviceService.getDescriptionURL, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.htmlContent = res['Data'].Description;
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }
  setProfileData() {
    let data = {"Description": this.htmlContent };
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;",
    "Authorization": "Bearer " + this.SessionServiceService.JWTToken
    }
    }; 
    this.http.post(this.APIURLserviceService.editProfileDescURL, data, config)
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
