import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Edges } from './interfaces';

@Directive({
  selector: '[splitter-spot]'
})
export class SplitterSpotDirective implements OnInit, OnDestroy {
  private target: HTMLElement;
  private isMoving = false;
  private orientation: 'vertical' | 'horizontal';
  private edges: Edges;
  private mainPanel: HTMLElement;

  @Input() mainPanelSelector;

  @HostBinding('class.splitter-spot') cls = true;
  @HostListener('mousedown')
  onMouseDown() {
    this.isMoving = true;
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
    const { isMoving, edges } = this;
    if (isMoving) {
      this.setHorizontalSplitter(e.x - edges.left);
      if (e.x < edges.left) {
        this.setHorizontalSplitter(0);
      }
      if (e.x > edges.right - this.target.clientWidth) {
        this.setHorizontalSplitter(
          this.target.offsetParent.clientWidth - this.target.clientWidth
        );
      }
    }
  }
  handleVerticalSplitter(e) {
    const { isMoving, edges } = this;
    if (isMoving) {
      this.setVerticalSplitter(e.y - edges.top);
      if (e.y < edges.top) {
        this.setVerticalSplitter(0);
      }
      if (e.y > edges.bottom - this.target.clientHeight) {
        this.setVerticalSplitter(
          this.target.offsetParent.clientHeight - this.target.clientHeight
        );
      }
    }
  }

  onMouseUp() {
    this.isMoving = false;
  }

  ngOnInit() {
    this.orientation =
      (this.target.classList.contains('vertical') && 'vertical') ||
      'horizontal';
    this.mainPanel = <HTMLElement>document.querySelector(
      this.mainPanelSelector
    );
    if (this.orientation === 'horizontal') {
      document.body.addEventListener(
        'mousemove',
        this.handleHorizontalSplitter.bind(this)
      );
      this.setHorizontalSplitter(200); // default
    } else if (this.orientation === 'vertical') {
      document.body.addEventListener(
        'mousemove',
        this.handleVerticalSplitter.bind(this)
      );
      this.setVerticalSplitter(200); // default
    } else {
      throw new Error('splitter orientation is not set');
    }
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    setTimeout(() => {
      // TODO: ASK ABOUT HEIGHT. ONLY SET TIMEOUT WORKED ¯ \ _ (ツ) _ / ¯
      const {
        top,
        right,
        left,
        bottom
      } = this.target.offsetParent.getBoundingClientRect();
      this.edges = { top, right, left, bottom };
    }, 0);
  }

  ngOnDestroy() {
    window.removeEventListener('mouseup', this.onMouseUp.bind(this));
    document.body.removeEventListener(
      'mousemove',
      this.handleVerticalSplitter.bind(this)
    );
    document.body.removeEventListener(
      'mousemove',
      this.handleHorizontalSplitter.bind(this)
    );
  }
}
