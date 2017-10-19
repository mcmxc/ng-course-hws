import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import translations from './../helpers/translations';

@Directive({
  selector: '[translate]'
})
export class TranslateDirective implements OnInit {
  private host: HTMLElement;
  constructor(private elementRef: ElementRef) {
    this.host = elementRef.nativeElement;
  }
  @Input('lang') lang: string;
  @Input('label') label: string;

  ngOnInit() {
    this.localize(this.host.innerText);
  }

  localize(text) {
    const localization = translations[this.lang];
    if (!localization) return; // leave the content as is, if no translation was found
    const labelsFound = localization.find(el => el.label === this.label);
    this.host.innerText = labelsFound ? labelsFound.value : text;
  }
}
