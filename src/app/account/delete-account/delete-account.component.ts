import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonDataService } from '../../common-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.scss'
})

export class DeleteAccountComponent implements OnDestroy {
  private subscription!:Subscription;
  acc_number:number = 0;
  constructor(private commonDataService: CommonDataService, private router:Router){}

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  deleteAccountByAccountNumber(): void{
    this.subscription = this.commonDataService.deleteAccount(this.acc_number).subscribe(data => {
      console.log(data);
    }, err => {
      this.commonDataService.componentError = err.error;
      this.router.navigate(["bad-request"]);
    })
  }
}
