import { NgModule } from '@angular/core';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetCustomerByIdComponent } from './get-customer-by-id/get-customer-by-id.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: 'add-customer', component: AddCustomerComponent
      },

      {
        path:'get-customer-by-id', component: GetCustomerByIdComponent
      },

      {
        path:'show-customers', component: ShowCustomersComponent
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule{}