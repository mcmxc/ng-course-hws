import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import translations from './../helpers/translations';

@Directive({
  selector: '[translate]'
})
export class TranslateDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  @Input('lang') lang: string;
  @Input('label') label: string;

  ngOnInit() {
    this.localize(this.elementRef.nativeElement.innerText);
  }

  localize(text) {
    const localization = translations[this.lang];
    if (!localization) return; // leave the content as is, if no translation was found
    const labelsFound = localization.find(el => el.label === this.label);
    this.elementRef.nativeElement.innerText = labelsFound
      ? labelsFound.value
      : text;
  }
}
