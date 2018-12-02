import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';
import { APIURLserviceService} from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile-page',
  templateUrl: './view-profile-page.component.html',
  styleUrls: ['./view-profile-page.component.scss']
})
export class ViewProfilePageComponent implements OnInit {

  private id  = '';
  private userData;
  private badgeData;
  private dataLoaded = false;
  private badgesLoaded = false;
  constructor(private router:Router, private route: ActivatedRoute, private http: HttpClient, private ProfileServiceService:ProfileServiceService, private APIURLserviceService:APIURLserviceService) {
    this.id = '' + this.route.snapshot.paramMap.get('id');
    this.getProfileData();
    this.getBadges();
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
      setTimeout(() => 
      {
          this.setupDescription();
      },
      500);
      

    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

  getBadges() {
    let getBadgesURL = this.APIURLserviceService.getBadgesURL + this.id;
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.get(getBadgesURL, config)
    .subscribe(
    (res) => {
      console.log(res);
      this.badgeData = res['Data'];
      this.badgesLoaded = true;
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

  setupDescription() {
    let descBox = document.getElementById("description");
    console.log(this.userData);
    descBox.innerHTML = this.userData.UserData.ProfileData.Description;
  }

  sendMessage() {
    this.router.navigate(['/sendmsg/' + this.userData.UID]);
  }

}
