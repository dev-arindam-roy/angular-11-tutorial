import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userName: string = '';
  userEmail: string = '';
  userMobile: string = '';
  userEditIndex: number = -1;

  @Output() addThisUser = new EventEmitter<any>();
  @Input() set editUser(value: any) {
    if (value.editData != undefined) {
      this.userName = value.editData.name;
      this.userEmail = value.editData.email;
      this.userMobile = value.editData.mobile;
      this.userEditIndex = value.editIndex;
    }
  }
  @Output() updateTheUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser() {
    const userData = {
      name: this.userName,
      email: this.userEmail,
      mobile: this.userMobile
    };
    this.addThisUser.emit(userData);
    this.userName = this.userEmail = this.userMobile = '';
  }

  editThisUser() {
    const userData = {
      name: this.userName,
      email: this.userEmail,
      mobile: this.userMobile,
      index: this.userEditIndex
    };
    this.updateTheUser.emit(userData);
    this.userName = this.userEmail = this.userMobile = '';
    this.userEditIndex = -1;
  }

}
