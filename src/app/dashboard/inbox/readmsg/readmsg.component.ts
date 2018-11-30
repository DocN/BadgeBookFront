import { Component, OnInit } from '@angular/core';
import {ReadmsgserviceService} from '../../../services/readmsgservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readmsg',
  templateUrl: './readmsg.component.html',
  styleUrls: ['./readmsg.component.scss']
})
export class ReadmsgComponent implements OnInit {

  constructor(private messageservice:ReadmsgserviceService, private router:Router) { }

  ngOnInit() {
    
  }

  reply() {
    var route = 'sendmsg/' + this.messageservice.currentMsgData['Msg'].SenderUID;
    this.router.navigate([route]);
  }

}
