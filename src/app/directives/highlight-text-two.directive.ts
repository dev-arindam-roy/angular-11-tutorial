import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTextTwo]'
})
export class HighlightTextTwoDirective implements OnInit {

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, 'background-color', 'lime');
    this.render.setStyle(this.element.nativeElement, 'color', 'black');
    this.render.setStyle(this.element.nativeElement, 'font-weight', 'bold');
    this.render.setStyle(this.element.nativeElement, 'padding-left', '5px');
  }

}
