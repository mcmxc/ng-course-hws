import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[numHighlight]'
})
export class NumHighlightDirective implements OnInit {
  @Input('numHighlight') highlightMethod: string;

  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  bold(match: string): string {
    return `<b>${match}</b>`;
  }

  italic(match: string): string {
    return `<em>${match}</em>`;
  }

  addWrapper(match: string): string {
    return `<span class="number">${match}</span>`;
  }

  highlight(content: string, method: (match: string) => string): void {
    this.elementRef.nativeElement.innerHTML = content.replace(
      /[+-]?(\d*[.|,])?\d+/g,
      method
    );
  }

  ngOnInit() {
    const htmlContent = this.elementRef.nativeElement.innerHTML;
    switch (this.highlightMethod) {
      case 'bold':
        this.highlight(htmlContent, this.bold);
        break;
      case 'italic':
        this.highlight(htmlContent, this.italic);
        break;
      case 'number-class':
        this.highlight(htmlContent, this.addWrapper);
        break;
      default:
        this.highlight(htmlContent, this.addWrapper);
        break;
    }
  }
}
