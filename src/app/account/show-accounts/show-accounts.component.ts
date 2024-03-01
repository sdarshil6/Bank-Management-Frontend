import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAccount } from '../show-accounts/IAccount';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { UpdateAccountComponent } from '../update-account/update-account.component';
import { GetAllTransactionDetailsComponent } from '../get-all-transaction-details/get-all-transaction-details.component';


@Component({
  selector: 'app-show-accounts',
  templateUrl: './show-accounts.component.html',
  styleUrl: './show-accounts.component.scss'
})
export class ShowAccountsComponent implements OnDestroy, OnInit {
  accountsResponse!: IAccount[];

  private subscription!: Subscription;

  

  constructor(private commonDataService:CommonDataService, private router:Router, private dialog:MatDialog){}

  
  ngOnInit():void{
    this.getAllAccounts();
  }

  getAllAccounts(){
    this.subscription = this.commonDataService.showAllAccounts()
    .subscribe( data => {
      this.accountsResponse = data;
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
        this.getAllAccounts();
      });
    }
  }

  updateAccount(accNumber: number):void{
  
    const dialogRef = this.dialog.open(UpdateAccountComponent, {
      width: '1000px',
      height:'100%',
      data: {
        accountNumberUpdate: accNumber
      }
    });

    dialogRef.afterClosed().subscribe( (data)=> {
      
      if(data){
        this.getAllAccounts();
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
