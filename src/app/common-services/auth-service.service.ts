import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn: boolean = false;
  loginStatusEvent = new EventEmitter<boolean>();

  constructor() { 
    const getStatus = localStorage.getItem("ariAngIsLogin");
    if (getStatus == '1') {
      this.isLoggedIn = true;
    }
  }

  login() {
    this.isLoggedIn = true;
    localStorage.setItem("ariAngIsLogin", '1');
    this.loginStatusEvent.emit(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem("ariAngIsLogin");
    this.loginStatusEvent.emit(this.isLoggedIn);
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 2000);
    });
  }
}
