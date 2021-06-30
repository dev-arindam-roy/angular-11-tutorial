import { Component, OnInit } from '@angular/core';

import { ItemsService } from './service/items.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItemsList: any[];
  constructor(menuItems: ItemsService) { 
    this.menuItemsList = menuItems.getAllMenuItems();
  }

  ngOnInit(): void {
  }

}
