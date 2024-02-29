import { Component, Inject, OnDestroy, OnInit, LOCALE_ID } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateGender } from '../Validators/gender.validator';
import { ValidateMaritalStatus } from '../Validators/maritalStatus.validate';
import { NoNumberOrSymbolValidator } from '../Validators/number-symbol.validate';
import { DTOCustomerGet } from '../get-customer-by-id/DTOCustomerGet';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent implements OnDestroy, OnInit {
  private subscription:Subscription;
  private id:number = 0;
 
  
  cust:DTOCustomerGet = new DTOCustomerGet();

  updateCustomerForm: FormGroup = new FormGroup({
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

  constructor(private service:CommonDataService, @Inject(MAT_DIALOG_DATA) public data:any, @Inject(LOCALE_ID) public locale: string, private router:Router ){}
  ngOnInit(): void {
    this.getCustomerInfo(this.data.customerIdUpdate);
  }
  
  getCustomerInfo(id: number){
    
    this.id = id;
   
    this.service.getCustomerById(id).subscribe(res => {
     
      this.cust=res;
      this.updateCustomerForm.get('firstName').setValue(this.cust.firstName);
      this.updateCustomerForm.get('lastName').setValue(this.cust.lastName);
      this.updateCustomerForm.get('gender').setValue(this.cust.gender);
      this.updateCustomerForm.get('address').setValue(this.cust.address);
      let dateString = formatDate(this.cust.dateOfBirth, "yyyy-MM-dd", this.locale);
      this.updateCustomerForm.get('dateOfBirth').setValue(dateString);
      this.updateCustomerForm.get('city').setValue(this.cust.city);
      this.updateCustomerForm.get('state').setValue(this.cust.state);
      this.updateCustomerForm.get('country').setValue(this.cust.country);
      this.updateCustomerForm.get('phoneNumber').setValue(this.cust.phoneNumber);
      this.updateCustomerForm.get('postalCode').setValue(this.cust.postalCode);
      this.updateCustomerForm.get('emailAddress').setValue(this.cust.emailAddress);
      this.updateCustomerForm.get('martitalStatus').setValue(this.cust.martitalStatus);
    });
  }

  updateCustomer(){
      this.subscription = this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe(res => {
        alert("Customer updated successfully");
      }, err => {
        this.service.componentError = err.error;
        this.router.navigate(["bad-request"]);
      });
  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
