import { Component, Inject, OnInit } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBalance } from '../Validators/balance.validate';
import { IAccount } from '../../child/IAccount';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.scss'
})
export class UpdateAccountComponent implements OnInit {

  private subscription:Subscription;
  account!:IAccount;
  accNumber:number = 0;
  constructor(private service:CommonDataService, @Inject(MAT_DIALOG_DATA) public data:any, private router:Router){}
  ngOnInit(): void {
    this.getAccountInfo(this.data.accountNumberUpdate);
  }


  updateAccountForm: FormGroup = new FormGroup({
    balance: new FormControl('', [Validators.required, ValidateBalance]),
    accountStatus: new FormControl('', [Validators.required]),
    currency: new FormControl('')
  });

  getAccountInfo(accNumber: number){
    this.accNumber = accNumber;
    this.subscription = this.service.getAccountByAccountNumber(accNumber).subscribe(res => {
      this.account = res;
      this.updateAccountForm.get('balance').setValue(this.account.balance);
      this.updateAccountForm.get('accountStatus').setValue(this.account.accountStatus);
    });
  }

  updateAccount(){
    this.updateAccountForm.get('currency').setValue("INR");
    this.subscription = this.service.updateAccount(this.accNumber, this.updateAccountForm.value).subscribe(data => {
      alert("Your account has been updated");
    }, err => {
      this.service.componentError = err.error;
      this.router.navigate(["bad-request"]);
    });


  }

}
