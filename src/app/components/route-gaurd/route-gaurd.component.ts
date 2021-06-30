import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../common-services/auth-service.service';
import { IDeactivateGuard } from '../../common-services/change-detect.service';

@Component({
  selector: 'app-route-gaurd',
  templateUrl: './route-gaurd.component.html',
  styleUrls: ['./route-gaurd.component.css']
})
export class RouteGaurdComponent implements OnInit, IDeactivateGuard {

  authStatus: boolean = false;

  uName: string = 'Arindam';
  uEmail: string = 'ari@yopmail.com';
  uPhno: string = '9898767654';

  editName: string;
  editEmail: string;
  editPhno: string;

  constructor(private auth: AuthServiceService) {
    
    //component loading time login status check; one time checking
    this.authStatus = this.auth.isLoggedIn;

    this.editName = this.uName;
    this.editEmail = this.uEmail;
    this.editPhno = this.uPhno;
   }

  ngOnInit(): void {
    //when 'loginStatusEvent' trigger from auth service, get the current login status
    this.auth.loginStatusEvent.subscribe((data) => {
      console.log(data);
      this.authStatus = data;
    });
  }

  doLogin(): void {
    this.auth.login();
  }

  doLogout(): void {
    this.auth.logout();
  }

  demoUpdate(): void {
    this.uName = this.editName;
    this.uEmail = this.editEmail;
    this.uPhno = this.editPhno;
    alert('Done!');
  }

  canExit() {
    if (this.uName !== this.editName || this.uEmail !== this.editEmail || this.uPhno !== this.editPhno) {
      if (confirm('Changes are not save, are you want to move ?')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
