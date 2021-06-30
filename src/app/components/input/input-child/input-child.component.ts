import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {

  @Input() uid: number | undefined;
  @Input() unm: string | undefined;
  @Input() idDev: boolean | undefined;
  @Input() langs: string[] | undefined;
  @Input() skls: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
