import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child-four',
  templateUrl: './input-child-four.component.html',
  styleUrls: ['./input-child-four.component.css']
})
export class InputChildFourComponent implements OnInit {

  // alias theUser as user
  @Input('theUser') user : any;
  @Input() theUserIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
