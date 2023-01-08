import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
 // maybe this is not a built in directive, but it is a directive that is used to highlight text
  constructor(private el : ElementRef ,private renderer : Renderer2) {
    el.nativeElement.classList.add('bg-red-400');
    this.renderer.setStyle(el.nativeElement, 'color', 'white');
  }

}
