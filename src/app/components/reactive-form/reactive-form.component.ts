import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './Post.model';
import { FirebaseServiceService } from '../../common-services/firebase-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  isLoading: boolean = true;
  fireBasePosts: any;

  sex: string[] = ['male', 'female'];

  restrictedEmails = [
    'roy@yopmail.com',
    'ari@yopmail.com'
  ]

  registrationForm: FormGroup;

  constructor(private http: HttpClient, private fbService: FirebaseServiceService) { 

    this.registrationForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      loginDetails: new FormGroup({
        email_id: new FormControl('', [Validators.required, Validators.email, this.restrictedEmailValidationCheckin.bind(this)]),
        mobile_no: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
        confirm_password: new FormControl('', [Validators.required, this.confirmPasswordValidationChecking.bind(this)])
      }),
      skills: new FormArray([])
    });

    this.getPosts();
  }

  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe((data) => {
      //console.log(data);
    });
    this.registrationForm.statusChanges.subscribe((data) => {
      //console.log(data);
    });
    
  }

  getPosts() {
    this.http.get('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((response: any) => {
      let posts = [];
      for (let key in response) {
        posts.push({...response[key], key})
      }
      return posts;
    })).subscribe(response => {
      console.log(response);
      this.fireBasePosts = response;
      this.isLoading = false;
    }, (error) => {
      alert(error.message)
    });

    // this.fbService.fetchPost().subscribe(response => {
    //   console.log(response);
    //   this.fireBasePosts = response;
    // });
  }

  get getControl() {
    //console.log(this.registrationForm.controls.loginDetails.get('email_id')?.invalid);
    return this.registrationForm.controls;
  }

  get skillControl() {
    return (this.registrationForm.get('skills') as FormArray).controls;
  }


  formSubmit() {
    this.isLoading = true;
    console.log(this.registrationForm.value);
    const postData = this.registrationForm.value;
    // this.http.post('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', postData).subscribe((response) => {
    //   console.log(response);
    //   this.getPosts();
    // });
    this.fbService.createPost(postData).subscribe((response) => {
      console.log(response);
      this.getPosts();
    });
  }

  deleteFbPosts(evt: Event) {
    evt.preventDefault();
    this.fbService.deletePosts().subscribe((response) => {
      console.log(response);
      this.getPosts();
    })
  }

  addSkills() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.registrationForm.get('skills')).push(control);
    //(this.registrationForm.get('skills') as FormArray).push(control);
  }

  removeSkill(arrayIndex: number) {
    (<FormArray>this.registrationForm.get('skills')).removeAt(arrayIndex);
  }

  restrictedEmailValidationCheckin(control: FormControl) : { restrictedEmail : boolean } | null {
    if (this.restrictedEmails.includes(control.value)) {
      return { restrictedEmail: true};
    }
    return null;
  }

  confirmPasswordValidationChecking(control: FormControl) : { [key: string]: any } | null {
    const pwdVal = "123456";
    if (control.value != '' && pwdVal != control.value) {
      return { confirmPasswordNotMatch: true};
    }
    return null;
  }

  mobileNumberValidation(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<any> | Observable<any> => {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (control.value == '9836395513') {
            resolve({blockMobileNumber : true});
          } else {
            resolve(null);
          }
        }, 3000)
      });
      return promise;
    }
  }

  setValue() {
    this.registrationForm.setValue({
      first_name: 'xxx',
      last_name: 'xxx',
      gender: 'female',
      loginDetails: {
        email_id: 'xxx@xx.ccc',
        mobile_no: '1234567890',
        password: '123456',
        confirm_password: '123456'
      },
      skills: []
    });
  }

  patchValue() {
    this.registrationForm.patchValue({
      first_name: 'xxx',
      last_name: 'xxx',
      gender: 'female',
      skills: []
    });
  }

}
