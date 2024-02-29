import { Component, OnDestroy } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.scss'
})
export class DeleteCustomerComponent implements OnDestroy {

  subscription!:Subscription;
  customer_id: number = 0;

  constructor(private commonDataService: CommonDataService, private router:Router){}

  deleteCustomer(){
    this.subscription = this.commonDataService.deleteCustomer(this.customer_id).
      subscribe(res => {
        console.log(res);
      }, error => {
        if(error.status == 404){
          this.commonDataService.componentError = error.error;
          this.router.navigate(['bad-request']);
        }
      });
  }

  ngOnDestroy(): void {
   
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
