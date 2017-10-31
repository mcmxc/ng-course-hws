import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Directive({
  selector: '[splitter-spot]'
})
export class SplitterSpotDirective implements OnInit {
  private target: HTMLElement;
  private isMoving = false;
  private moveFrom: 'top' | 'left';

  @Input('options') options;
  @HostBinding('class.splitter-spot') cls = true;
  @HostListener('mousedown')
  onMouseDown() {
    this.isMoving = true;
  }
  ngOnInit() {
    this.moveFrom = this.target.classList.contains('vertical') ? 'top' : 'left';
    this.adjustSplitterPosition(this.moveFrom, 200);
    document.body.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.body.addEventListener('mouseup', this.onMouseUp.bind(this));
  }
  constructor(private elementRef: ElementRef) {
    this.target = elementRef.nativeElement;
  }

  adjustSplitterPosition(dir: string, val: number) {
    const panel = <HTMLElement>document.querySelector('.panel-1');
    this.target.style[dir] = val + 'px';
    panel.style[dir === 'top' ? 'height' : 'width'] = val + 'px';
    let c = document.querySelector('.container').getBoundingClientRect();
    if (val < c.left - 80) {
      this.target.style[dir] = '0px';
      panel.style[dir === 'top' ? 'height' : 'width'] = '0px';
    }
    if (val > c.right - 90) {
      this.target.style[this.moveFrom] = c.right - 90 + 'px';
      panel.style[dir === 'top' ? 'height' : 'width'] = c.right - 90 + 'px';
    }
  }

  onMouseMove({ pageX, pageY }) {
    let c = document.querySelector('.container').getBoundingClientRect();
    if (this.isMoving) {
      if (this.moveFrom === 'top') {
        this.adjustSplitterPosition(this.moveFrom, pageY);
      } else {
        this.adjustSplitterPosition(this.moveFrom, pageX - c.left);
      }
    }
  }

  onMouseUp(e) {
    this.isMoving = false;
  }
}
