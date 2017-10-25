import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'betsFormat',
})

export class BettingPipe implements PipeTransform {
  transform(value: string, type: string) {
    if (!value) return;
    switch (type) {
      case 'eu':
        return value;
      case 'us':
        return value + 'a';
      case 'uk':
        return value + 'b';
    }
  }
}
