import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateGender } from '../Validators/gender.validator';
import { ValidateMaritalStatus } from '../Validators/maritalStatus.validate';
import { NoNumberOrSymbolValidator } from '../Validators/number-symbol.validate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent implements OnDestroy{

  private subscription!:Subscription;
 

  addCustomerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(500), NoNumberOrSymbolValidator]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(500), NoNumberOrSymbolValidator]),
    gender: new FormControl('', [Validators.required, ValidateGender]),
    address: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    dateOfBirth: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.maxLength(200), NoNumberOrSymbolValidator]),
    state: new FormControl('', [Validators.required, Validators.maxLength(200), NoNumberOrSymbolValidator]),
    country: new FormControl('', [Validators.required, Validators.maxLength(200), NoNumberOrSymbolValidator]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}$')]),
    postalCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}$')]),
    emailAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    martitalStatus: new FormControl('', [Validators.required, ValidateMaritalStatus])
  });


  constructor(private commonDataService: CommonDataService, private router:Router){}


  addCustomer(){
   
    this.subscription = this.commonDataService.addCustomer(this.addCustomerForm.value)
      .subscribe( res => {
        alert("ADDED SUCCESSFULLY");
      }, err => {
        this.commonDataService.componentError = err.error;
        this.router.navigate(["bad-request"]);
      });

  }

  ngOnDestroy(): void {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
