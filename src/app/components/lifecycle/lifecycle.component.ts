import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  getLoad: string[] = [];

  constructor() { 
    this.getLoad.push('(Parent) Lifecycle Component Constructor Load');
    console.log('(Parent) Lifecycle Component Constructor Load');
  }

  ngOnInit(): void {
    this.getLoad.push('(Parent) Lifecycle Component ngOnInit Load');
    console.log('(Parent) Lifecycle Component ngOnInit Load');
  }

  lifeCycleSteps() {
    this.getLoad = [
      'App Module Constructor',
      'Parent Component Constructor',
      'Parent Component ngOnInit'
    ];
  }

}
