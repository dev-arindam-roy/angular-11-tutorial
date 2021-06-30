import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightTextOne]'
})
export class HighlightTextOneDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    // way 1
    // (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'yellow';
    // (<HTMLElement>this.element.nativeElement).style.color = 'red';
    // (<HTMLElement>this.element.nativeElement).style.fontWeight = '700';
    // (<HTMLElement>this.element.nativeElement).style.paddingLeft = '5px';

    // way 2
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'yellow';
    (this.element.nativeElement as HTMLElement).style.color = 'red';
    (this.element.nativeElement as HTMLElement).style.fontWeight = '700';
    (this.element.nativeElement as HTMLElement).style.paddingLeft = '5px';
  }

}
