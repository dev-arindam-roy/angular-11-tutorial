import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../common-services/users.service';
//import { CustomHelpers } from '../../helpers/custom-helper';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
  //providers: [CustomHelpers]
})
export class NgforComponent implements OnInit {

  userDataObject: any[] = [];
  isSearch: boolean = false;
  currentSearchBy: string = '';

  constructor(us: UsersService) {
    this.userDataObject = us.userData; 
  }

  ngOnInit(): void {
  }

  getRange(start: number, end: number, increment: number): number[] {
    const range: number[] = [];
    for (var i = start; i < end; i = i + increment) {
      range.push(i);
    }
    return range;
  }

  getFilterData(param: string): any {
    const data: any[] = [];
    this.userDataObject.forEach(obj => {
      if (param === 'company') {
        data.push(obj.company);
      }
      if (param === 'designation') {
        data.push(obj.designation);
      }
      if (param === 'married') {
        data.push(obj.isMarried);
      }
      if (param === 'skill') {
        if (obj.skills.length > 0) {
          const skillsData: any[] = obj.skills;
          skillsData.forEach(item => {
            data.push(item.name);
          });
        }
      }
    });
    return Array.from(new Set(data));
  }

  searchRecords(evt:any, param:any): any {
    let value = evt.target.value;
    const resultData: any[] = [];
    let assignOperator = '=';
    if (value != '' && value != 0) {
      if (param === 'company') {
        this.userDataObject.forEach(obj => {
          if (obj.company === value) {
            resultData.push(obj);
          }
        });
      }
      if (param === 'designation') {
        this.userDataObject.forEach(obj => {
          if (obj.designation === value) {
            resultData.push(obj);
          }
        });
      }
      if (param === 'age') {
        this.userDataObject.forEach(obj => {
          if (obj.age >= value) {
            resultData.push(obj);
            assignOperator = '>=';
          }
        });
      }
      if (param === 'salary') {
        this.userDataObject.forEach(obj => {
          if (obj.salary >= value) {
            resultData.push(obj);
            assignOperator = '>=';
          }
        });
      }
      if (param === 'married') {
        this.userDataObject.forEach(obj => {
          if (value == 'true') {
            if (obj.isMarried) {
              resultData.push(obj);
            }
          } else {
            if (!obj.isMarried) {
              resultData.push(obj);
            }
          }
        });
      }
      if (param === 'skill') {
        this.userDataObject.forEach(obj => {
          if (obj.skills.length > 0) {
            const sklData: any[] = obj.skills;
            sklData.forEach(item => {
              if (item.name === value) {
                resultData.push(obj);
              }
            });
          }
        });
      }
    }
    this.userDataObject = resultData;
    this.isSearch = true;
    this.currentSearchBy = param + ' | value ' + assignOperator + ' ' + value;
  }

  resetData() {
    this.isSearch = false;
    let userServiceObj = new UsersService();
    this.userDataObject = userServiceObj.userData;
  }

}
