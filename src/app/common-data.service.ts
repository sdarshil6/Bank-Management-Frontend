import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { DTOCustomerAdd } from './customer/add-customer/DTOCustomerAdd';
import { Router } from '@angular/router';
import { ICustomer } from './customer/show-customers/ICustomer';
import { IAccount } from './account/show-accounts/IAccount';
import { DTOCustomerGet } from './customer/get-customer-by-id/DTOCustomerGet';
import { DTOTransactionDetailGet } from './account/get-all-transaction-details/DTOTransactionDetailGet';
import { ITypeInterest } from './home/ITypeInterest';
import { IUpdateAccount } from './account/update-account/IUpdateAccount';


@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  public vegetables:string[];
  public componentError: string='';
  private customerBaseUrl: string = "https://localhost:7296/api/Customer/";
  private accountBaseUrl: string = "https://localhost:7296/api/Account/";
  constructor(private http: HttpClient, private router:Router) { 
    this.vegetables = ["Potato", "Ladyfingers", "Cabbage", "Brinjal"];
  }


  addCustomer(cus?: DTOCustomerAdd): Observable<string>{
    return this.http.post(this.customerBaseUrl + "add_customer", cus, {responseType:'text'});  
  }

  deleteCustomer(id: number): Observable<string>{
    return this.http.delete(this.customerBaseUrl + "delete_customer/" + id, {responseType:'text'});
  }

  showAllAccounts(): Observable<IAccount[]>{
    return this.http.get<IAccount[]>(this.accountBaseUrl + "get_all_accounts");
  }

  getCustomerById(id: number): Observable<DTOCustomerGet>{
    return this.http.get<DTOCustomerGet>("https://localhost:7296/api/Customer/get_customer_by_id/" + id);
  }

  showAllCustomers(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.customerBaseUrl + "get_all_customers");
  }

  deleteAccount(acc_number: number): Observable<string>{
    return this.http.delete(this.accountBaseUrl + "delete_account/" + acc_number, {responseType:'text'});
  }

  getAccountByAccountNumber(accNumber:number): Observable<IAccount>{
    return this.http.get<IAccount>(this.accountBaseUrl + "get_acccount_by_accNumber/" + accNumber);
  }

  addAccount(body ?: DTOCustomerAdd):Observable<string>{
    return this.http.post(this.accountBaseUrl + "add_account", body, {responseType:'text'});
  }

  depositMoney(acc_number: number, amount: number): Observable<string>{
    return this.http.put(this.accountBaseUrl + "add_money/" + acc_number + "/" + amount, null, {responseType: 'text'});
  }

  withdrawMoney(acc_number: number, amount: number): Observable<string>{
    return this.http.put(this.accountBaseUrl + "withdraw_money/" + acc_number + "/" + amount, null, {responseType: 'text'});
  }

  getTransactionDetails(acc_number:number): Observable<DTOTransactionDetailGet[]>{
    return this.http.get<DTOTransactionDetailGet[]>(this.accountBaseUrl + "get_all_transaction_details/" + acc_number);
  }

  updateCustomer(customerId:number, data:DTOCustomerAdd):Observable<string>{
    return this.http.put(this.customerBaseUrl + "update_customer/" + customerId, data, {responseType: 'text'});
  }

  updateAccount(accountNumber:number, data:IUpdateAccount):Observable<string>{
    return this.http.put(this.accountBaseUrl + "update_account/" + accountNumber, data, {responseType:'text'});
  }

  getAllAccountsByCustomerId(customerId: number): Observable<IAccount[]>{
    return this.http.get<IAccount[]>(this.accountBaseUrl + "get_all_accounts_by_customerId/" + customerId);
  }

  getInterestRates(): Observable<ITypeInterest[]>{
    return this.http.get<ITypeInterest[]>(this.accountBaseUrl + "getInterestRates");
  }

}
