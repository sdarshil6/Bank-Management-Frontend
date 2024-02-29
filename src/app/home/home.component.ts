import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonDataService } from '../common-data.service';
import { Subscription } from 'rxjs';
import { ITypeInterest } from './ITypeInterest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription!:Subscription;
  body!:ITypeInterest[];

  constructor(private service:CommonDataService){}



  ngOnInit(): void {
    this.getInterestRatesTable();
  }

  getInterestRatesTable(){
    this.subscription = this.service.getInterestRates().subscribe(res => {
      this.body = res;
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
