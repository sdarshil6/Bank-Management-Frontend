import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddAccountComponent } from "./add-account/add-account.component";
import { DeleteAccountComponent } from "./delete-account/delete-account.component";
import { DepositMoneyComponent } from "./deposit-money/deposit-money.component";
import { GetAccountByAccountNumberComponent } from "./get-account-by-account-number/get-account-by-account-number.component";
import { ShowAccountsComponent } from "./show-accounts/show-accounts.component";
import { WithdrawMoneyComponent } from "./withdraw-money/withdraw-money.component";
import { AccountManagerComponent } from "./account-manager/account-manager.component";

const routes: Routes = [

    // {
    //     path:'', component: AccountManagerComponent
    // },
      
    {
        path:'show-accounts', component: ShowAccountsComponent
    },

    {
        path: 'delete-account', component: DeleteAccountComponent
    },

    {
        path:'get-account-by-account-number', component: GetAccountByAccountNumberComponent
    },

    {
        path:'add-account', component: AddAccountComponent
    },

    {
        path:'deposit-money', component: DepositMoneyComponent
    },

    {
        path:'withdraw-money', component: WithdrawMoneyComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule{}