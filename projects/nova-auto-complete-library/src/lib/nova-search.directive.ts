import { Directive, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[novaSearch]'
})
export class NovaSearchDirective {

  @Output() clickOutSide: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.clickOutSide.emit(null);
    }
  }

}
