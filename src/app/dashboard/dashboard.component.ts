import { Component, OnInit } from '@angular/core';
import  {SessionServiceService} from '../services/session-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private Router: Router, private SessionServiceService:SessionServiceService) { 
    if(this.SessionServiceService.loggedIn == false) {
      this.Router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
