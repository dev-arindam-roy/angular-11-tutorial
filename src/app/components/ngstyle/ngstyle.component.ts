import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  fontSize: number = 12;
  fontColor: string[] = ['red', 'yellow', 'green', 'blue', 'black'];
  setFontColor: string = 'black';
  setFontWeight: number = 600;

  fSize: number = 16;
  fColor: string = 'black';
  fWeight: number = 500;
  marginTop: number = 10;
  
  applyObject: any = {
    'font-size' : this.fSize + 'px',
    'color' : this.fColor,
    'font-weight' : this.fWeight,
    'margin-top' : this.marginTop + 'px'
  };

  constructor() { }

  ngOnInit(): void {
  }

  getRange(start: number, end: number, increment: number): number[] {
    const range: number[] = [];
    for (var i = start; i < end; i = i + increment) {
      range.push(i);
    }
    return range;
  }

  applyFontSize(evt: any) {
    this.fontSize = evt.target.value;
  }

  applyFontColor(evt: any) {
    this.setFontColor = evt.target.value;
  }

  applyFontWight(evt: any) {
    this.setFontWeight = evt.target.value;
  }

  applyStyleObject(evt: any, param: string) {
    let eventValue = evt.target.value;
    if (param === 'size') {
      this.fSize = eventValue;
    }
    if (param === 'color') {
      this.fColor = eventValue;
    }
    if (param === 'weight') {
      this.fWeight = eventValue;
    }
    this.applyObject = {
      'font-size' : this.fSize + 'px',
      'color' : this.fColor,
      'font-weight' : this.fWeight,
      'margin-top' : this.marginTop + 'px'
    };
    console.log(this.applyObject);
  }

}
