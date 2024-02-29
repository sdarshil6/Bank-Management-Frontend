import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonDataService } from '../../common-data.service';
import { ICustomer } from './ICustomer';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { GetAllAccountsOfCustomerComponent } from '../get-all-accounts-of-customer/get-all-accounts-of-customer.component';


@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrl: './show-customers.component.scss'
})
export class ShowCustomersComponent implements OnInit, OnDestroy {

  private subscription!:Subscription;
  responseCustomers?:ICustomer[];
  constructor(private commonDataService:CommonDataService, private router:Router, private dialog:MatDialog){}
  
  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers():void{
    this.subscription = this.commonDataService.showAllCustomers().subscribe(data => {
      this.responseCustomers = data;
    }, err => {
      this.commonDataService.componentError = err.error;
      this.router.navigate(["bad-request"]);
    });
  }

  deleteCustomer(customerId:number):void{

    if(confirm("Are you sure you want to delete?")){
      this.subscription = this.commonDataService.deleteCustomer(customerId).subscribe(data => {
       
        alert("Deletion Successful");
      }, err => {
        console.log(err);
        this.commonDataService.componentError = err.error;
        this.router.navigate(['bad-request']);
      }, () => {
        this.getAllCustomers();
      });
    }
  }

  updateCustomer(customerId: number):void{
    const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      width: '1000px',
      height:'100%',
      data: {
        customerIdUpdate: customerId
      }
    });

    dialogRef.afterClosed().subscribe( (data)=> {
      
      if(data){
        this.getAllCustomers();
      }
    });
  }

  viewAllAccounts(customerId:number):void{
    const dialogRef = this.dialog.open(GetAllAccountsOfCustomerComponent, {
      width: '800px',
      height:'40%',
      data: {
        customerIdView: customerId
      }
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
