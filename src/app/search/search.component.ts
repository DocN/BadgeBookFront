import { Component, OnInit } from '@angular/core';
import {APIURLserviceService} from '../services/apiurlservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchKey = "";
  private searchData = [];
  constructor(private APIURLserviceService:APIURLserviceService, private http: HttpClient) { }

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

}
