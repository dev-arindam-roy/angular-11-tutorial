import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTextEventOne]'
})
export class HighlightTextEventOneDirective implements OnInit {

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, 'border', '1px solid #ccc');
    this.render.setStyle(this.element.nativeElement, 'padding', '4px');
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.render.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.render.setStyle(this.element.nativeElement, 'color', 'red');
    this.render.setStyle(this.element.nativeElement, 'font-weight', '700');
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.render.setStyle(this.element.nativeElement, 'background-color', '#ccc');
    this.render.setStyle(this.element.nativeElement, 'color', '#000');
  }

  @HostListener('click') onClick(event: Event) {
    this.render.setStyle(this.element.nativeElement, 'background-color', 'lime');
    this.render.setStyle(this.element.nativeElement, 'border', '1px solid green');
    alert('clicked');
  }

}
