import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  sidebarMenuItems = [
    {
      name: 'Basic Notes',
      link: ''
    },
    {
      name: 'Commands',
      link: 'useful-commands'
    },
    {
      name: 'Life Cycle',
      link: 'lifecycle'
    },
    {
      name: 'Typescript',
      link: 'typescript'
    },
    {
      name: 'ngIf',
      link: 'ng-if'
    },
    {
      name: 'ngSwitch',
      link: 'ng-switch'
    },
    {
      name: 'ngFor',
      link: 'ng-for'
    },
    {
      name: 'ngStyle',
      link: 'ng-style'
    },
    {
      name: 'ngClass',
      link: 'ng-class'
    },
    {
      name: 'Data Binding',
      link: 'data-binding'
    },
    {
      name: 'Pipes',
      link: 'pipes'
    },
    {
      name: 'Routing',
      link: 'routing'
    },
    {
      name: 'Route Gaurd',
      link: 'route-guards'
    },
    {
      name: 'Input()',
      link: 'input'
    },
    {
      name: 'Output()',
      link: 'output'
    },
    {
      name: '#Local Reference',
      link: 'local-referance'
    },
    {
      name: 'Custom Directive',
      link: 'directive'
    },
    {
      name: 'Template Form',
      link: 'template-driven-form'
    },
    {
      name: 'Reactive Form',
      link: 'reactive-form'
    },
    {
      name: 'Toastr',
      link: 'toastr'
    },
    {
      name: 'Sweet Alert2',
      link: 'sweet-alert'
    },
    {
      name: 'Firebase Login App',
      link: 'firebase-login'
    }
  ];

  getAllMenuItems() {
    return this.sidebarMenuItems;
  }
}
