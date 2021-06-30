import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTextEventTwo]'
})
export class HighlightTextEventTwoDirective implements OnInit {

  @HostBinding('style.backgroundColor') highlightBgColor: string = 'yellow';
  @HostBinding('style.color') highlightTxtColor: string = 'red';

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.highlightBgColor = 'lime';
    this.highlightTxtColor = 'black';
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.highlightBgColor = 'yellow';
    this.highlightTxtColor = 'red';
  }

}
