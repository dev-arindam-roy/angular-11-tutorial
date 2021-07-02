import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  example1() {
    this.toastr.success('<b>Hello world!</b>', 'Toastr fun!');
  }

  closeAll() {
    this.toastr.clear();
  }

}
