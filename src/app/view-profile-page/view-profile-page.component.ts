import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';
import { APIURLserviceService} from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile-page',
  templateUrl: './view-profile-page.component.html',
  styleUrls: ['./view-profile-page.component.scss']
})
export class ViewProfilePageComponent implements OnInit {

  private id  = '';
  constructor(private route: ActivatedRoute, private http: HttpClient, private ProfileServiceService:ProfileServiceService, private APIURLserviceService:APIURLserviceService) {
    this.id = '' + this.route.snapshot.paramMap.get('id');
    this.getProfileData();
   }

  ngOnInit() {
    
  }

  getProfileData() {
    let profilegetURL = this.APIURLserviceService.getProfileDataURL + this.id;
    console.log(profilegetURL);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.get(profilegetURL, config)
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
