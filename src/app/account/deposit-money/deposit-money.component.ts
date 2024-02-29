import { Component, OnDestroy } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrl: './deposit-money.component.scss'
})
export class DepositMoneyComponent implements OnDestroy {

  acc_number:number = 0;
  amount:number = 0;
  subscription!: Subscription

  constructor(private commonDataService:CommonDataService, private router:Router){}

  depositMoney(){
    this.subscription = this.commonDataService.depositMoney(this.acc_number, this.amount).subscribe(res => {
      alert("Money has been deposited");
    }, err => {
      this.commonDataService.componentError = err.error;
      this.router.navigate(["bad-request"]);
    } )
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
