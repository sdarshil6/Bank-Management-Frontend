import { Component, OnDestroy } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-money',
  templateUrl: './withdraw-money.component.html',
  styleUrl: './withdraw-money.component.scss'
})
export class WithdrawMoneyComponent implements OnDestroy {

  acc_number:number = 0;
  amount:number = 0;
  subscription!: Subscription

  constructor(private commonDataService:CommonDataService, private router:Router){}

  withdrawMoney(){

    this.subscription = this.commonDataService.withdrawMoney(this.acc_number, this.amount).subscribe(res => {
      alert("Money has been withdrawn");
    }, err => {
      this.commonDataService.componentError = err.error;
      this.router.navigate(["bad-request"]);
    })
  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
