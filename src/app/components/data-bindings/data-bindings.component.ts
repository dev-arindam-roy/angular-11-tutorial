import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

  imageUrl: string = "https://avatars.githubusercontent.com/u/24665327?s=400&u=0cd3a411f9ffe9802f321510b046855660e39844&v=4";
  imgWidth: number = 100;
  imgHeight: number = 100;
  imgBorder: number = 2;

  htmlText: string = '<h1>Hi, I am Arindam Roy</h1>';
  isTrue: boolean = false;

  textboxData: string = "Hi, i am <strong>Arindam</strong>";
  textboxData2: string = "hello, how are you?";

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.result = Number(this.num1) + Number(this.num2);
  }
  sub() {
    this.result = Number(this.num1) - Number(this.num2);
  }
  mul() {
    this.result = Number(this.num1) * Number(this.num2);
  }
  div() {
    if (this.num2 != 0)
      this.result = Number(this.num1) / Number(this.num2);
    else
      this.result = 0;
  }

}
