import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.cardHighlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cardHighlight(null);
  }

  private cardHighlight(color) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}

