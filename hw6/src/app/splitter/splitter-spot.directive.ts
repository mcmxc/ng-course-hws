import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[splitter-spot]'
})
export class SplitterSpotDirective implements OnInit {
  target: HTMLElement;

  private isMoving = false;

  constructor(private elementRef: ElementRef) {
    this.target = elementRef.nativeElement;
  }

  @HostBinding('class.splitter-spot') cls = true;

  @HostListener('mousedown')
  onMouseDown() {
    this.isMoving = true;
  }

  onMouseMove(e) {
    if (this.isMoving) {
      console.log(e.pageX, e.pageY);
    }
  }

  onMouseUp(e) {
    console.log('up');
    this.isMoving = false;
  }

  ngOnInit() {
    document.body.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.body.addEventListener('mouseup', this.onMouseUp.bind(this));
  }
}
