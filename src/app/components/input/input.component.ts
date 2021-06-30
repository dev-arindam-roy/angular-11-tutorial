import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../common-services/users.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  id: number = 5001;
  name: string = 'Arindam Roy';
  isDeveloper: boolean = true;
  languages: string[] = ['English', 'Hindi', 'Bengali'];
  skills: any[] = [
    { name: 'Laravel', rating: 5 },
    { name: 'Vue Js', rating: 4 },
    { name: 'MongoDb', rating: 2 },
    { name: 'Angular', rating: 3 }
  ];

  getUserData: any[] = [];
  getUserData2: any[] = [];

  uName: string = '';
  uEmail: string = '';
  uPhno: string = '';
  uList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadUserData() {
    let us = new UsersService();
    this.getUserData = us.userData;
  }

  loadUserData2() {
    let us = new UsersService();
    this.getUserData2 = us.userData;
  }

  addUser() {
    const setData = {
      name: this.uName,
      email: this.uEmail,
      phno: this.uPhno
    }
    this.uList.push(setData);
    this.uName = this.uEmail = this.uPhno = '';
  }

  resetAll() {
    this.getUserData = this.getUserData2 = this.uList = [];
    this.uName = this.uEmail = this.uPhno = '';
  }

}
