import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent implements OnInit {

  constructor() { 
    Swal.fire('Hi, i am SweetAlert2');
  }

  ngOnInit(): void {
  }

  example1() {
    Swal.fire('Oops...', 'Something went wrong!', 'error');
  }

}
