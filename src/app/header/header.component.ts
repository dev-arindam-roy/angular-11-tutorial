import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navTitle: string = "Angular 11 - Code Examples";
  myImage: string = "https://avatars.githubusercontent.com/u/24665327?s=400&u=0cd3a411f9ffe9802f321510b046855660e39844&v=4";
  imgW: number = 40;
  constructor() { }

  ngOnInit(): void {
  }

}
