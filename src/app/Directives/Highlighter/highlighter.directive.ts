import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.className = 'alert alert-success';

  }

}
