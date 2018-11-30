import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {SessionServiceService} from '../services/session-service.service';
import {DashrouteService} from '../services/dashroute.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private Router: Router, private SessionServiceService:SessionServiceService, private DashrouteService:DashrouteService) { 
    if(this.SessionServiceService.loggedIn == false) {
      this.Router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  switchPref(){
    this.DashrouteService.dashRoute = "preferences";
  }
  
  switchSearch() {
    this.DashrouteService.dashRoute = "search";
  }

  switchEditProfile() {
    this.DashrouteService.dashRoute = "editProfile";
  }

  switchToInbox() {
    this.DashrouteService.dashRoute = "inbox";
  }
}
