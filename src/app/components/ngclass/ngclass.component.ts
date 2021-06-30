import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  upperCaseText: string = 'text-uppercase';
  lineThrough: string = 'text-decoration-line-through';
  isTextSuccess: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isSuccessCheck(evt: any) {
    if (evt.target.value == 1) {
      this.isTextSuccess = true;
      this.lineThrough = '';
    } else {
      this.isTextSuccess = false;
      this.lineThrough = 'text-decoration-line-through';
    }
  }

}
