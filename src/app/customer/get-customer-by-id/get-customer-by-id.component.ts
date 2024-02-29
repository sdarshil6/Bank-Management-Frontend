import { Component, OnDestroy } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { DTOCustomerGet } from './DTOCustomerGet';
import { Subscription, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { MatDialog } from '@angular/material/dialog';
import { GetAllAccountsOfCustomerComponent } from '../get-all-accounts-of-customer/get-all-accounts-of-customer.component';


@Component({
  selector: 'app-get-customer-by-id',
  templateUrl: './get-customer-by-id.component.html',
  styleUrl: './get-customer-by-id.component.scss'
})
export class GetCustomerByIdComponent implements OnDestroy {

  cust: DTOCustomerGet = new DTOCustomerGet();
  customer_id:number = 0;
  private subscription!:Subscription;
  isClicked:boolean = false;

  constructor(private commonDataService: CommonDataService, private router:Router, private dialog:MatDialog){}
  

  getCustomerById(){
    this.isClicked = true;
    this.subscription = this.commonDataService.getCustomerById(this.customer_id)
      .subscribe(data => {
       
        this.cust = data;
      }, error => {
        if(error.status === 404){
          console.log(error);
          this.commonDataService.componentError = error.error;
          this.router.navigate(['bad-request']);
        }
      })
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
        this.getCustomerById();
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
        this.getCustomerById();
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
      this.subscription.unsubscribe();
    }
  }

}
