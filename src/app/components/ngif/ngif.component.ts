import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  colorbox: string = '';
  colorbox2: string = '';
  dropDown1: string = '';
  checkbox1: string[] = [];
  showHideText1: number | null = null;
  showHideText2: number = 0;
  showHideText3: boolean = false;

  dataObj1: any[];

  constructor(ds: DataService) { 
    this.dataObj1 = ds.dataObject;
  }

  ngOnInit(): void {
  }

  showColorBox(evt: any) {
    this.colorbox = evt.target.value;
  }

  showColorBox2(color: string) {
    this.colorbox2 = color;
  }

  onChangeBox1(evt: any) {
    this.dropDown1 = evt.target.value;
  }

  checkColor1(evt: any) {
    if (evt.currentTarget.checked) {
      this.checkbox1.push(evt.target.value);
    } else {
      const arrayIndex = this.checkbox1.indexOf(evt.target.value);
      if (arrayIndex > -1) {
        this.checkbox1.splice(arrayIndex, 1);
      }
    }
    console.log(this.checkbox1);
  }

  showHideTextRadio(evt: any) {
    this.showHideText1 = evt.target.value;
  }

  showHideTextCheckbox(evt: any) {
    if (evt.currentTarget.checked) {
      this.showHideText2 = 1;
    } else {
      this.showHideText2 = 0;
    }
  }

  showHideTextCheckbox2(evt: any) {
    if (evt.currentTarget.checked) {
      this.showHideText3 = true;
    } else {
      this.showHideText3 = false;
    }
  }

}
