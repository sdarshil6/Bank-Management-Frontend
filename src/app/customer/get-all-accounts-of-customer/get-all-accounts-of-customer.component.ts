import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { IAccount } from '../../child/IAccount';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-get-all-accounts-of-customer',
  templateUrl: './get-all-accounts-of-customer.component.html',
  styleUrl: './get-all-accounts-of-customer.component.scss'
})
export class GetAllAccountsOfCustomerComponent implements OnInit, OnDestroy {

  private subscription!:Subscription;
  accountsResponse!: IAccount[];
  

  constructor(private service:CommonDataService, private router:Router, @Inject(MAT_DIALOG_DATA) public data:any){}
  
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  
  ngOnInit(): void {
    this.getAllAccountsOfCustomer(this.data.customerIdView);
  }

  getAllAccountsOfCustomer(customerId:number){
    this.subscription = this.service.getAllAccountsByCustomerId(customerId).subscribe(res => {
      this.accountsResponse = res;
    }, err => {
      this.service.componentError = err.error;
      this.router.navigate(["bad-request"]);
    });
  }



}
