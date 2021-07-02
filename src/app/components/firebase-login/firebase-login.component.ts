import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, signUpResponseInterface } from './service/auth.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase-login',
  templateUrl: './firebase-login.component.html',
  styleUrls: ['./firebase-login.component.css']
})
export class FirebaseLoginComponent implements OnInit {

  isSignInMode: boolean;
  @ViewChild('signInUpFrm') fbForm !: NgForm;
  errorMessage: string = '';

  constructor(
    private auth: AuthService, 
    private toastr: ToastrService,
    private router: Router
  ) { 

    this.isSignInMode = true;
  }

  ngOnInit(): void {
  }

  modeChange() {
    this.isSignInMode = !this.isSignInMode;
    console.log(this.isSignInMode);
  }

  onFormSubmit() {
    this.errorMessage = '';
    if (this.fbForm.invalid) {
      return;
    }

    if (this.isSignInMode) {
      this.showLoading();
      this.auth.signIn(this.fbForm.controls.email.value, this.fbForm.controls.password.value).subscribe((response) => {
        this.closeLoading();
        this.toastr.success('You are signup successfully', 'Done!');2
        this.resetForm();
        console.log(response);
        this.router.navigate(['/']);
      }, (errMsg) => {
        this.closeLoading();
        this.errorMessage = errMsg;
        this.toastr.error(this.errorMessage, 'Oops!');
        console.log(errMsg);
      });
    } else {
      this.showLoading();
      this.auth.signUp(this.fbForm.controls.email.value, this.fbForm.controls.password.value).subscribe((response) => {
        this.closeLoading();
        this.toastr.success('You are signup successfully', 'Done!');2
        this.resetForm();
        console.log(response);
      }, (errMsg) => {
        this.closeLoading();
        this.errorMessage = errMsg;
        this.toastr.error(this.errorMessage, 'Oops!');
        console.log(errMsg);
      });
    }
  }

  displayValidationErrors(key : string) : string {
    if (key === 'email') {
      if (this.fbForm.controls.email.errors?.required) {
        return 'Please enter email';
      }
      if (this.fbForm.controls.email.errors?.email) {
        return 'Please enter valid email';
      }
    }
    if (key === 'password') {
      if (this.fbForm.controls.password.errors?.required) {
        return 'Please enter password';
      }
      if (this.fbForm.controls.password.errors?.minlength) {
        return 'Password required 6 chat atleast';
      }
    }
    return '';
  }

  showLoading() {
    Swal.fire({
      title: 'Processing...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  closeLoading() {
    Swal.close();
  }

  clearFormData() {
    this.fbForm.controls.email.setValue('');
    this.fbForm.controls.password.setValue('');
  }

  resetForm() {
    this.fbForm.reset();
  }

}
