import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child-two',
  templateUrl: './input-child-two.component.html',
  styleUrls: ['./input-child-two.component.css']
})
export class InputChildTwoComponent implements OnInit {

  @Input() userRecords: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
