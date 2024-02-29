import { Component } from '@angular/core';
import { CommonDataService } from '../common-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

parentVegetables:string[] = [];
issend : boolean = false;
  
  constructor(public commonData:CommonDataService){
    this.parentVegetables = commonData.vegetables.slice();
  }

  parentEvent($event: string[]):void{
    this.parentVegetables = $event; 
  }

  sendToChild(){
      this.issend = true;
  }
}
