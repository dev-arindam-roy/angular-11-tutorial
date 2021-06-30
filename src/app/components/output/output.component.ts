import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  userList: any[] = [];
  editUserData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addUser(userData: any) {
    this.userList.push(userData);
  }

  deleteTheUser(userObj: any) {
    const index = this.userList.indexOf(userObj);
    this.userList.splice(index, 1);
  }

  editTheUser(userObj: any) {
    const index = this.userList.indexOf(userObj);
    this.editUserData = {
      editIndex: index,
      editData: userObj
    };
  }

  updateUser(editUserObj: any) {
    this.userList[editUserObj.index].name = editUserObj.name;
    this.userList[editUserObj.index].email = editUserObj.email;
    this.userList[editUserObj.index].mobile = editUserObj.mobile;
  }

}
