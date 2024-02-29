import { Component, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, map } from 'rxjs';

import { DTOCustomerAdd } from './DTOCustomerAdd';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent{
  data: any;
  private subscription!: Subscription;
 
  @Input() childVegetables!:string[];
  public vegetableCopy:string[] = [];
  @Input() ischildsend : boolean = false;
  

  @Output() someEvent = new EventEmitter<string[]>();

  

  tempCustomer: DTOCustomerAdd = new DTOCustomerAdd("Om", "Joshi", "Male", "Something", "Amreli", "Gujarat", "India", "7895462132", "456987", "cvf@gmail.com", "Single");

  constructor(private http:HttpClient){}

  sendToParent(){
    this.vegetableCopy = this.childVegetables.slice();
    this.changeVegetables();
    this.someEvent.emit(this.vegetableCopy);

  }
  changeVegetables():void{
    this.vegetableCopy[0] = "Something 0";
    this.vegetableCopy[1] = "Something 1";
    this.vegetableCopy[2] = "Something 2";
    this.vegetableCopy[3] = "Something 3";
  }

  getAccountByAccountNumber(){

    this.subscription = this.http.get<any>("https://localhost:7296/api/Account/get_acccount_by_accNumber/" + (document.getElementById("account_number") as HTMLInputElement).value)
    .subscribe(data => {
      console.log(data);
    }, 
    error => {
      console.error("Error : ", error);
    }
    );

  }

}
