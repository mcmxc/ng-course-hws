import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number, format: string): string {
    if (!value) {
      return;
    }
    switch (format) {
      case 'binary':
        return value.toString(2);
      case 'decimal':
        return value.toString(10);
      case 'hex':
        return value.toString(16).toUpperCase();
      default:
        return value.toString();
    }
  }
}
