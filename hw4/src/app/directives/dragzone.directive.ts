import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

import randomColor from 'randomcolor';

@Directive({
  selector: '[dragzone]'
})
export class DragzoneDirective {
  private target: HTMLElement;
  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.target = elementRef.nativeElement;
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e) {
    e.preventDefault();
  }
  @HostListener('dragleave', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(e) {
    e.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(e) {
    e.preventDefault();
    const draggedEl = document.createElement('div');
    draggedEl.innerText = e.dataTransfer.getData('text');
    draggedEl.style.color = randomColor({ luminosity: 'light' });
    this.elementRef.nativeElement.appendChild(draggedEl);
  }
}
