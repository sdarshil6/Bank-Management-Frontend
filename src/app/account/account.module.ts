import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagerComponent} from './account-manager/account-manager.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ShowAccountsComponent } from './show-accounts/show-accounts.component';
import { GetAccountByAccountNumberComponent } from './get-account-by-account-number/get-account-by-account-number.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAccountComponent } from './update-account/update-account.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from  '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { GetAllTransactionDetailsComponent } from './get-all-transaction-details/get-all-transaction-details.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
   AccountManagerComponent, DeleteAccountComponent, ShowAccountsComponent, GetAccountByAccountNumberComponent, AddAccountComponent, DepositMoneyComponent, WithdrawMoneyComponent, UpdateAccountComponent, GetAllTransactionDetailsComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatInputModule, MatDialogModule, AccountRoutingModule
  ],
})
export class AccountModule { }
