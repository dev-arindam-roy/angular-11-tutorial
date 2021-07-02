import { Component, OnInit } from '@angular/core';

import { ItemsService } from './service/items.service';

import { AuthService as FBauthService} from '../components/firebase-login/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAuthenticated: boolean = false;
  menuItemsList: any[];
  constructor(menuItems: ItemsService, private fbAuthService: FBauthService) { 
    this.menuItemsList = menuItems.getAllMenuItems();
  }

  ngOnInit(): void {
    this.fbAuthService.autoLogin();
    this.fbAuthService.fbAuthSub.subscribe((data) => {
      console.log(data);
      this.isAuthenticated = data ? true : false;
    });
  }

  onLogout(evt: Event) {
    evt.preventDefault();
    this.fbAuthService.logout();
  }

}
