import { Component, OnInit } from '@angular/core';
import {APIURLserviceService} from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ProfileServiceService} from '../services/profile-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchKey = "";
  private searchData = [];
  constructor(private router:Router, private APIURLserviceService:APIURLserviceService, private http: HttpClient, private ProfileServiceService:ProfileServiceService) { }

  ngOnInit() {
  }

  search() {
    let data = {"Keywords": this.searchKey};
    const body = JSON.stringify(data);
    var config = {headers : {
    "Content-Type": "application/json; charset = utf-8;"
    }
    }; 
    this.http.post(this.APIURLserviceService.searchURL, data, config)
    .subscribe(
    (res) => {
      console.log(res["Data"]);
      this.searchData = res["Data"];
    },
    err => {
    console.log(err);
    //finish loading
    }
    );
  }

  selectProfilePage(currentResult) {
    this.ProfileServiceService.currentSearchUID = currentResult.UID;
    console.log(this.ProfileServiceService.currentSearchUID);
    this.router.navigate(['/profile/' + this.ProfileServiceService.currentSearchUID]);
  }

}
