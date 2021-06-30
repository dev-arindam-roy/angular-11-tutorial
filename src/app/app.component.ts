import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './common-services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'examples';
  loginId: string = 'arindam';
  password: string = '123456';
  loginStatus: boolean = false;

  constructor(private auth: AuthServiceService) {
    this.loginStatus = auth.isLoggedIn;
  }

  ngOnInit(): void {
    this.auth.loginStatusEvent.subscribe((data) => {
      this.loginStatus = data;
    })
  }

  login(): void {
    if (this.loginId == 'arindam' && this.password == '123456') {
      this.auth.login();
    } else {
      alert('Invalid Login');
    }
  }
}
