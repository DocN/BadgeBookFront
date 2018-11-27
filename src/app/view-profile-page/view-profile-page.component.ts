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
  private userData;
  private dataLoaded = false;
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
      this.userData = res['Data'];
      this.dataLoaded = true;
      this.setupDescription();
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

  setupDescription() {
    let descBox = document.getElementById("description");
    descBox.innerHTML = this.userData.UserData.ProfileData.Description;
  }


}
