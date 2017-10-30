import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

type Direction = 'horizontal' | 'vertical';

@Directive({
  selector: '[splitter]'
})
export class SplitterDirective {
  target: HTMLElement;

  @Input('splitter') direction: Direction = 'horizontal';

  @HostBinding('style.display') private display = 'flex';
  @HostBinding('style.flexDirection')
  get getDirection() {
    return this.direction === 'vertical' ? 'column' : 'row';
  }
  @HostBinding('class') get getCls() { return this.direction; }

  constructor(private elementRef: ElementRef) {
    this.target = elementRef.nativeElement;
  }
}
