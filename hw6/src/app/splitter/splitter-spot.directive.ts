import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

import getEdges from './../helpers/getEdges';

@Directive({
  selector: '[splitter-spot]'
})
export class SplitterSpotDirective implements OnInit {
  private target: HTMLElement;
  private isMoving = false;
  private orientation: 'vertical' | 'horizontal';
  private top: number;
  private right: number;
  private bottom: number;
  private left: number;
  private mainPanel: HTMLElement;
  @Input('options') options;
  @HostBinding('class.splitter-spot') cls = true;
  @HostListener('mousedown')
  onMouseDown() {
    this.isMoving = true;
  }
  ngOnInit() {
    this.orientation =
      (this.target.classList.contains('vertical') && 'vertical') ||
      'horizontal';

    this.mainPanel = <HTMLElement>document.querySelector('.panel-1');
    console.log(this.mainPanel);

    if (this.orientation === 'horizontal') {
      document.body.addEventListener(
        'mousemove',
        this.handleHorizontalSplitter.bind(this)
      );
    } else if (this.orientation === 'vertical') {
      document.body.addEventListener(
        'mousemove',
        this.handleVerticalSplitter.bind(this)
      );
    } else {
      throw new Error('splitter orientation is not set');
    }
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    setTimeout(() => {
      const { top, right, left, bottom } = getEdges(this.target);
      this.top = top;
      this.right = right;
      this.bottom = bottom;
      this.left = left;
    }, 0);
  }

  constructor(private elementRef: ElementRef) {
    this.target = elementRef.nativeElement;
  }

  setHorizontalSplitter(x: number) {
    this.target.style.left = `${x}px`;
    this.mainPanel.style.width = `${x}px`;
  }
  setVerticalSplitter(y: number) {
    this.target.style.top = `${y}px`;
    this.mainPanel.style.height = `${y}px`;
  }
  handleHorizontalSplitter(e) {
    if (this.isMoving) {
      this.setHorizontalSplitter(e.x - this.left);
      if (e.x < this.left) {
        this.setHorizontalSplitter(0);
      }
      if (e.x > this.right - this.target.clientWidth) {
        this.setHorizontalSplitter(
          this.target.offsetParent.clientWidth - this.target.clientWidth
        );
      }
    }
  }
  handleVerticalSplitter(e) {
    if (this.isMoving) {
      this.setVerticalSplitter(e.y - this.top);
      if (e.y < this.top) {
        this.setVerticalSplitter(0);
      }
      if (e.y > this.bottom - this.target.clientHeight) {
        this.setVerticalSplitter(
          this.target.offsetParent.clientHeight - this.target.clientHeight
        );
      }
    }
  }

  onMouseUp(e) {
    this.isMoving = false;
  }
}
