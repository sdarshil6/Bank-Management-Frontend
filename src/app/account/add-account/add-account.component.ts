import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonDataService } from '../../common-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBalance } from '../Validators/balance.validate';
import { ValidateCustomerId } from '../Validators/customerId.validate';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss'
})
export class AddAccountComponent implements OnDestroy {

  private subscription!:Subscription;

  addAccountForm:FormGroup = new FormGroup({
    accountType: new FormControl('',[Validators.required]),
    currency: new FormControl(''),
    balance: new FormControl('', [Validators.required, ValidateBalance]),
    accountStatus: new FormControl('', [Validators.required]),
    customerId: new FormControl('', [Validators.required, ValidateCustomerId])
  });

  constructor(private commonDataService: CommonDataService, private router:Router){}
  
  
  addAccount(){

    this.addAccountForm.get('currency').setValue("INR");
  
    this.subscription = this.commonDataService.addAccount(this.addAccountForm.value).subscribe(data => {
      alert("ADDED SUCCESSFULLY");
    }, err => {
      this.commonDataService.componentError = err.error;
      this.router.navigate(["bad-request"]);
    });
  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
