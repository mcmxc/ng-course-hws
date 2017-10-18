import {
  Directive,
  ElementRef,
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

  @HostListener('dragenter', ['$event'])
  @HostListener('dragleave', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragHover(e) {
    e.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(e) {
    e.preventDefault();
    const $draggedEl = document.createElement('div');
    $draggedEl.classList.add('dropped-el');
    $draggedEl.innerText = e.dataTransfer.getData('text/plain');
    this.setStyles($draggedEl, { color: randomColor({ luminosity: 'light' }) });
    this.host.appendChild($draggedEl);
    this.host.querySelector('h1').remove();
  }
}
