import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTextDynamicEvent]'
})
export class HighlightTextDynamicEventDirective implements OnInit {

  defaultBgColor: string = 'yellow';
  defaultTxtColor: string = 'black';

  @Input() hilightBgColor: string = 'red';
  @Input() hilightTxtColor: string = 'yellow';

  @HostBinding('style.backgroundColor') defBg: string = this.defaultBgColor;
  @HostBinding('style.color') defCol: string = this.defaultTxtColor;

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, 'font-weight', 700);
    this.render.setStyle(this.element.nativeElement, 'padding-left', '5px');
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.defBg = this.hilightBgColor;
    this.defCol = this.hilightTxtColor;
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.defBg = this.defaultBgColor;
    this.defCol = this.defaultTxtColor;
  }

}
