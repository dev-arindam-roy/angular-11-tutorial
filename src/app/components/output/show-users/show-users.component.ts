import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  @Input() singleUser: any;
  @Input() userIndex: number = 0;
  @Output() deleteUser = new EventEmitter<any>();
  @Output() editUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteUser(userObj: any) {
    this.deleteUser.emit(userObj);
  }

  onEditUser(userObj: any) {
    this.editUser.emit(userObj);
  }

}
