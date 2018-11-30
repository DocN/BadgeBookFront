import { Component, OnInit } from '@angular/core';
import {ReadmsgserviceService} from '../../../services/readmsgservice.service';
@Component({
  selector: 'app-readmsg',
  templateUrl: './readmsg.component.html',
  styleUrls: ['./readmsg.component.scss']
})
export class ReadmsgComponent implements OnInit {

  constructor(private messageservice:ReadmsgserviceService) { }

  ngOnInit() {
    
  }

}
