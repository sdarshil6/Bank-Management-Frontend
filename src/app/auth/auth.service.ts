import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  get isLoggedIn(): boolean
  {
    return !!localStorage.getItem('token');
  }
  constructor() { }
  
  logIn(username: string): boolean{
    if(username == "sdarshil6"){
      const token = "myToken"
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  logOut(){
    localStorage.removeItem('token');
  }
}
