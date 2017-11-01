import {
  AfterViewInit,
  Directive,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { SplitterSpotDirective } from './splitter-spot.directive';

interface SplitterConfig {
  background: string;
  orientation: 'horizontal' | 'vertical';
  height: string;
}

@Directive({
  selector: '[splitter]'
})
export class SplitterDirective implements OnInit {
  target: HTMLElement;

  @Output('stylesApplied')
  stylesApplied: EventEmitter<CSSStyleDeclaration> = new EventEmitter();

  @Input('options') options: SplitterConfig;

  @HostBinding('style')
  private get styles() {
    const { background, orientation, height } = this.options;
    return Object.assign(this.target.style, {
      height: height,
      minHeight: height,
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
