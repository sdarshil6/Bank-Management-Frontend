import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrl: './account-manager.component.scss'
})
export class AccountManagerComponent {

  // router?: Router;
  constructor(private router:Router,private route:ActivatedRoute){}

  navigateToShowAccountsComponent(){
    this.router.navigate(['show-accounts'], {relativeTo:this.route});
  }

}
