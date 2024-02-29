import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { DTOTransactionDetailGet } from './DTOTransactionDetailGet';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-transaction-details',
  templateUrl: './get-all-transaction-details.component.html',
  styleUrl: './get-all-transaction-details.component.scss'
})
export class GetAllTransactionDetailsComponent implements OnDestroy, OnInit{

  private subscription!:Subscription;
  details?:DTOTransactionDetailGet[];
  
  constructor(private commonDataService: CommonDataService, @Inject(MAT_DIALOG_DATA) public data:any, private router:Router){}
  ngOnInit(): void {
    this.getAllTransactions(this.data.accountNumberTransaction);
  }

  getAllTransactions(acc_number: number):void{
    this.subscription = this.commonDataService.getTransactionDetails(acc_number).subscribe(data => {
      this.details = data;
    }, error => {
      this.commonDataService.componentError = error.error;
      this.router.navigate(["bad-request"]);
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
