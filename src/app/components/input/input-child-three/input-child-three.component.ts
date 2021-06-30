import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child-three',
  templateUrl: './input-child-three.component.html',
  styleUrls: ['./input-child-three.component.css']
})
export class InputChildThreeComponent implements OnInit {

  @Input() singleUser: any = [];
  @Input() singleSl: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
