import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'green';

  }

}
