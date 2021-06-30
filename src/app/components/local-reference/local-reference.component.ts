import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {


  @ViewChild('empName') employeeNameHtmlElement: ElementRef;
  @ViewChild('empEmail') employeeEmailHtmlElement: ElementRef;
  @ViewChild('empPhno') employeeMobileHtmlElement: ElementRef;

  userList: any[] = [];
  empList: any[] = [];
  devList: string[] = [];

  constructor(
    employeeNameHtmlElement: ElementRef, 
    employeeEmailHtmlElement: ElementRef, 
    employeeMobileHtmlElement: ElementRef) { 
    
    this.employeeNameHtmlElement = employeeNameHtmlElement;
    this.employeeEmailHtmlElement = employeeEmailHtmlElement;
    this.employeeMobileHtmlElement = employeeMobileHtmlElement;
    
  }

  ngOnInit(): void {
  }

  addUser(nameParam: HTMLInputElement, emailParam: HTMLInputElement) {
    console.log(nameParam);
    if (nameParam.value != '' && emailParam.value != '') {
      this.userList.push({name: nameParam.value, email: emailParam.value});
    }
  }

  addEmp() {
    console.log(this.employeeNameHtmlElement);
    if (this.employeeNameHtmlElement.nativeElement.value != '' && this.employeeEmailHtmlElement.nativeElement.value != '') {
      this.empList.push({
        name: this.employeeNameHtmlElement.nativeElement.value,
        email: this.employeeEmailHtmlElement.nativeElement.value,
        phno: this.employeeMobileHtmlElement.nativeElement.value,
      });
      this.employeeNameHtmlElement.nativeElement.value = '';
      this.employeeEmailHtmlElement.nativeElement.value = '';
      this.employeeMobileHtmlElement.nativeElement.value = '';
    }
  }

  addDev() {
    console.log((<HTMLInputElement>document.getElementById("devName")).value);
    this.devList.push((<HTMLInputElement>document.getElementById("devName")).value);
    (<HTMLInputElement>document.getElementById("devName")).value = '';
    //console.log(this.devList.length);
  }

}
