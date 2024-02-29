import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonDataService } from '../../common-data.service';
import { IAccount } from '../../child/IAccount';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAccountComponent } from '../update-account/update-account.component';
import { GetAllTransactionDetailsComponent } from '../get-all-transaction-details/get-all-transaction-details.component';

@Component({
  selector: 'app-get-account-by-account-number',
  templateUrl: './get-account-by-account-number.component.html',
  styleUrl: './get-account-by-account-number.component.scss'
})
export class GetAccountByAccountNumberComponent implements OnDestroy {

  private subscription!:Subscription;
  accNumber!:number;
  isClicked:boolean = false;
  account!:IAccount;
  constructor(private commonDataService: CommonDataService, private router:Router, private dialog:MatDialog){}
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  getAccountByAccountNumber(){
    this.isClicked = true;
    this.subscription = this.commonDataService.getAccountByAccountNumber(this.accNumber).subscribe(data => {
      this.account = data;
    }, err => {
      this.commonDataService.componentError = err.error;
      this.router.navigate(["bad-request"]);
    })
  }

  deleteAccount(accountNumber:number):void{
   
    if(confirm("Are you sure you want to delete?")){
      this.subscription = this.commonDataService.deleteAccount(accountNumber).subscribe(data => {
       
        alert("Deletion Successful");
      }, err => {
        console.log(err);
        this.commonDataService.componentError = err.error;
        this.router.navigate(['bad-request']);
      }, () => {
        this.getAccountByAccountNumber();
      });
    }
  }

  updateAccount(accNumber: number):void{
  
    const dialogRef = this.dialog.open(UpdateAccountComponent, {
      width: '800px',
      height:'80%',
      data: {
        accountNumberUpdate: accNumber
      }
    });

    dialogRef.afterClosed().subscribe( (data)=> {
      
      if(data){
        this.getAccountByAccountNumber();
      }
    });
  }

  viewTransactionDetails(accNumber:number):void{
    const dialogRef = this.dialog.open(GetAllTransactionDetailsComponent, {
      width: '800px',
      height: '80%',
      data: {
        accountNumberTransaction: accNumber
      }
    });
  }

}
