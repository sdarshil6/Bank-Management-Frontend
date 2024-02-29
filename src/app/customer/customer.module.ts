import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { GetCustomerByIdComponent } from './get-customer-by-id/get-customer-by-id.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from  '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { GetAllAccountsOfCustomerComponent } from './get-all-accounts-of-customer/get-all-accounts-of-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [AddCustomerComponent, DeleteCustomerComponent, CustomerManagerComponent, GetCustomerByIdComponent, ShowCustomersComponent, UpdateCustomerComponent, GetAllAccountsOfCustomerComponent],
  imports: [
    CommonModule, 
    FormsModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
})
export class CustomerModule { }
