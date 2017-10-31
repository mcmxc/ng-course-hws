import {
  Directive,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import { SplitterSpotDirective } from './splitter-spot.directive';

interface SplitterConfig {
  background: string;
  orientation: 'horizontal' | 'vertical';
}

@Directive({
  selector: '[splitter]'
})
export class SplitterDirective implements OnInit {
  target: HTMLElement;

  @Input('options') options: SplitterConfig;

  @HostBinding('style')
  private get styles() {
    return Object.assign(this.target.style, {
      height: '100%',
      width: '100%',
      display: 'flex',
      backgroundColor: this.options.background,
      flexDirection: this.options.orientation === 'vertical' ? 'column' : 'row'
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
