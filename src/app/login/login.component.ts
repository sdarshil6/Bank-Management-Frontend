import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userId:string = "";
  constructor(private router: Router, private authService: AuthService){}

  login(){
    if(this.authService.logIn(this.userId)){
      this.router.navigate(['/home']);
    }
    
  }

}
