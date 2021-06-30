import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() loadList: string[] = [];

  // first
  constructor() { 
    console.log('(Child) Lifecycle Component Constructor Load');
  }

  //this method will trigger when the input will change
  ngOnChanges(element: SimpleChanges): void {
    console.log('(Child) Lifecycle Component ngOnChanges Load');
    console.log(element);
  }

  // suecond
  ngOnInit(): void {
    console.log('(Child) Lifecycle Component ngOnInit Load');
  }

  //this method will trigger when any changes occur in the component
  ngDoCheck(): void {
    console.log('(Child) Lifecycle Component ngDoCheck Load');
  }

  //this method will trigger after content init
  ngAfterContentInit(): void {
    console.log('(Child) Lifecycle Component ngAfterContentInit Load');
  }

  //this method will trigger after content load and checked done
  ngAfterContentChecked(): void {
    console.log('(Child) Lifecycle Component ngAfterContentChecked Load');
  }

  //this method will trigger after view init
  ngAfterViewInit(): void {
    console.log('(Child) Lifecycle Component ngAfterViewInit Load');
  }

  //this method will trigger after view load and checked done
  ngAfterViewChecked(): void {
    console.log('(Child) Lifecycle Component ngAfterViewChecked Load');
  }
  
  //this method will trigger when destroy the component
  ngOnDestroy(): void {
    console.log('(Child) Lifecycle Component ngOnDestroy Load');
  }

}
