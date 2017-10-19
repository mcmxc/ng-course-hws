import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

import randomColor from 'randomcolor';

@Directive({
  selector: '[dragzone]'
})
export class DragzoneDirective implements OnInit {
  private host: HTMLElement;
  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.host = elementRef.nativeElement;
  }

  @Input() width: string;
  @Input() height: string;
  @Input() dropMsg: string;

  ngOnInit() {
    const $dropMsgHeader = document.createElement('h1');
    $dropMsgHeader.classList.add('drop-msg');
    $dropMsgHeader.innerText = this.dropMsg;
    this.host.appendChild($dropMsgHeader);
    this.setStyles(this.host, {
      width: this.applySize(this.width),
      minHeight: this.applySize(this.height),
      display: 'block'
    });
  }

  setStyles(el: HTMLElement, styles: Object): void {
    Object.assign(el.style, styles);
  }

  applySize(value: string): string {
    return value === 'auto' ? value : value + 'px';
  }

  @HostListener('DOMNodeInserted', ['$event'])
  onHostContentChange(e) {
    const droppedElements = Array.prototype.filter.call(
      e.currentTarget.children,
      child => child.classList.contains('dropped-el')
    );

    if (droppedElements.length === 1) {
      this.host.querySelector('.drop-msg').remove();
    }
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragleave', ['$event'])
  @HostListener('dragover', ['$event'])
  preventBrowserDefault(e) {
    e.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(e) {
    e.preventDefault();
    const $draggedEl = document.createElement('div');
    $draggedEl.classList.add('dropped-el');
    $draggedEl.innerHTML =
      e.dataTransfer.getData('html') || e.dataTransfer.getData('text');
    this.setStyles($draggedEl, { color: randomColor({ luminosity: 'light' }) });
    this.host.appendChild($draggedEl);
  }
}
