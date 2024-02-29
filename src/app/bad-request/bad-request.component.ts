import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonDataService } from '../common-data.service';

@Component({
  selector: 'app-bad-request',
  templateUrl: './bad-request.component.html',
  styleUrl: './bad-request.component.scss'
})
export class BadRequestComponent {
 
  componentError:string = this.service.componentError;
  constructor(private service: CommonDataService){}
  
}
