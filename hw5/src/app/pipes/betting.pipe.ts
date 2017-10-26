import { Pipe, PipeTransform } from '@angular/core';

import odds from 'odds-converter';

@Pipe({
  name: 'betsFormat'
})
export class BettingPipe implements PipeTransform {
  transform(value: string, from: string, to: string) {
    if (!value) {
      return;
    }
    if (from === 'eu' && to === 'us') {
      return (parseFloat(value) * 100 - 100).toFixed();
    } else if (from === 'eu' && to === 'uk') {
      return `${(parseFloat(value) - 1).toFixed()}/1`;
    } else if (from === 'us' && to === 'eu') {
      return ((parseFloat(value) + 100) / 100).toFixed(2);
    } else if (from === 'us' && to === 'uk') {
      return `${parseFloat(value) / 100}/1`;
    } else if (from === 'uk' && to === 'eu') {
      return value
        .split('/')
        .map(el => parseFloat(el))
        .reduce((prev, next) => prev + next);
    } else if (from === 'uk' && to === 'us') {
      return parseFloat(value.split('/')[0]) * 100;
    } else {
      return value;
    }
  }
}
