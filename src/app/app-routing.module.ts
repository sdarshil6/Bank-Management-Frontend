import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { ShowAccountsComponent } from './account/show-accounts/show-accounts.component';
import { AccountManagerComponent } from './account/account-manager/account-manager.component';
import { CustomerManagerComponent } from './customer/customer-manager/customer-manager.component';
import { GetCustomerByIdComponent } from './customer/get-customer-by-id/get-customer-by-id.component';
import { ShowCustomersComponent } from './customer/show-customers/show-customers.component';
import { GetAccountByAccountNumberComponent } from './account/get-account-by-account-number/get-account-by-account-number.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { DepositMoneyComponent } from './account/deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './account/withdraw-money/withdraw-money.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard]
  },

  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },

  {
    path:'login', component: LoginComponent
  },

  {
    path:'log-out', component: LoginComponent
  },

  {
    path: 'customer-manager', component: CustomerManagerComponent, loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuard],
  },

  {
    path: 'account-manager', component:AccountManagerComponent ,loadChildren: () => import('./account/account.module').then(m => m.AccountModule) ,canActivate: [AuthGuard],
  },

  {
    path:'bad-request', component:BadRequestComponent
  },

  {
    path:'**', component: PageNotFoundComponent
  } // wildcard route must be the last route ALWAYS
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ PageNotFoundComponent, HomeComponent]
