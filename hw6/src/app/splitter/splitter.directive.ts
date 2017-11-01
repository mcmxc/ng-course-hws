import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

import { SplitterConfig } from './interfaces';

@Directive({
  selector: '[splitter]'
})
export class SplitterDirective implements OnInit {
  private target: HTMLElement;

  @Input('options') options: SplitterConfig;

  @HostBinding('style')
  private get styles() {
    const { background, orientation } = this.options;
    return Object.assign(this.target.style, {
      height: '100%',
      width: '100%',
      display: 'flex',
      backgroundColor: background,
      flexDirection: orientation === 'vertical' ? 'column' : 'row'
    });
  }
  @HostBinding('class')
  get getCls() {
    return this.options.orientation;
  }

  constructor(private elementRef: ElementRef) {
    this.target = elementRef.nativeElement;
  }

  ngOnInit() {
    this.target
      .querySelector('.splitter-spot')
      .classList.add(this.options.orientation);
  }
}
