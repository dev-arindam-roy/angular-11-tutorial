import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  sex: string[] = ['Male', 'Female', 'Other'];
  designation: {id: number, name: string}[] = [];
  company: {id: number, name: string}[] = [];
  language: {code: string, name: string, selected: boolean}[] = [];
  skill: any[] = [];
  setSkills: {designation_id: number, skill_options: string}[] = [];
  
  @ViewChild('regFrm', {static: false}) userRegistrationForm !: NgForm;

  isFormSubmitted: boolean = false;

  submittedUserData = {
    first_name : '',
    last_name : '',
    email_id : '',
    mobile_number : '',
    address : '',
    gender : '',
    company_id : '',
    designation_id : '',
    technical_skills : '',
    working_languages : [],
    accept_terms : ''
  };

  getWorkLanguages = [];

  constructor() {
    
    this.designation = [
      {id: 1, name: 'Developer'},
      {id: 2, name: 'Database Administrator'},
      {id: 3, name: 'Quality Analyst'},
      {id: 4, name: 'Manager'},
      {id: 5, name: 'Business Analyst'}
    ];

    this.skill = [
      {
        designation_id: 1,
        skill_options: ['Laravel', 'Angular Js', 'Vue Js']
      },
      {
        designation_id: 2,
        skill_options: ['MySQL', 'MongoDB', 'Linux']
      },
      {
        designation_id: 3,
        skill_options: ['Any Testing Tool', 'Javascript', 'Database Queries']
      },
      {
        designation_id: 4,
        skill_options: ['Client Handling', 'Understnsd Business Scope', 'Good Technical Knowledge']
      },
      {
        designation_id: 5,
        skill_options: ['Web Development Architechture', 'Business Flow', 'Content Writing']
      }
    ]

    this.company = [
      {id: 1, name: 'CTS'},
      {id: 2, name: 'TCS'},
      {id: 3, name: 'WIPRO'},
      {id: 4, name: 'INFOSYS'},
      {id: 5, name: 'ONEX'}
    ];

    this.language = [
      {code: 'eng', name: 'English', selected: true},
      {code: 'ben', name: 'Hindi', selected: false},
      {code: 'hin', name: 'Bengali', selected: true}
    ];
  }

  ngOnInit(): void {
  }

  getSkills(evt: any): void {
    let value = evt.target.value;
    this.setSkills = [];
    if (value != '') {
      this.skill.forEach((obj) => {
        if (obj.designation_id == value) {
          this.setSkills = obj.skill_options;
        }
      });
    }
  }

  // Analysis #1
  // onFormSubmit(formElement: any) {
  //   console.log(formElement);
  // }


  // Analysis #2
  // onFormSubmit(formElement: NgForm) {
  //   /*
  //   if don't use NgForm directive here & ngForm in component's form tag
  //   and console the element then you will get the full HTML content element of the form
  //   onFormSubmit(formElement: any) { console.log(formElement) }
  //   */

  //   /*
  //   if you use NgForm & ngForm & console, the you will get the full Object
  //   Please check in console
  //   */
  //   console.log(formElement); // full object
  //   console.log(formElement.value); // all form values
  //   console.log('First Name Is : ' + formElement.value.first_name); // get perticular value
  // }



  // Analysis #3 @ViewChild -> bind the full form & values
  onFormSubmit() {
    this.isFormSubmitted = true;
    console.log(this.userRegistrationForm);
    this.submittedUserData.first_name = this.userRegistrationForm.value.userDetails.first_name;
    this.submittedUserData.last_name = this.userRegistrationForm.value.userDetails.last_name;
    this.submittedUserData.email_id = this.userRegistrationForm.value.userDetails.email;
    this.submittedUserData.mobile_number = this.userRegistrationForm.value.userDetails.mobile;

    this.submittedUserData.company_id = this.userRegistrationForm.value.userTechInfo.company;
    this.submittedUserData.designation_id = this.userRegistrationForm.value.userTechInfo.designation;
    this.submittedUserData.technical_skills = this.userRegistrationForm.value.userTechInfo.degskill;

    this.submittedUserData.working_languages = this.getWorkLanguages;
    this.submittedUserData.accept_terms = this.userRegistrationForm.value.agree;
    this.submittedUserData.gender = this.userRegistrationForm.value.gender;
    this.submittedUserData.address = this.userRegistrationForm.value.address;

    console.log(this.submittedUserData);

    this.userRegistrationForm.reset();
  }

  reset() {
    this.userRegistrationForm.reset();
  }

  setFill() {
    this.userRegistrationForm.form.setValue({
      userDetails: {
        first_name: "Arindam",
        last_name: "Roy",
        email: "arindam.roy.developer@gmail.com",
        mobile: "9836395513"
      },
      userTechInfo: {
        company: 5, 
        designation: 3, 
        degskill: true
      },
      address: "Kolkata",
      agree: true,
      gender: "Female",
      worklanguage: true
    });
  }

  patchFill() {
    this.userRegistrationForm.form.patchValue({
      userDetails: {
        first_name: "Arindam",
        last_name: "Roy",
        email: "arindam.roy.developer@gmail.com",
        mobile: "9836395513"
      },
      address: "Kolkata",
      gender: "Female",
      worklanguage: true
    });
  }

  worklanguageChangeEvent(evt: any, lngCode: string) {
    if (evt.currentTarget.checked) {
      (this.getWorkLanguages as Array<string>).push(lngCode);
    }
    console.log(this.getWorkLanguages);
  }

}
