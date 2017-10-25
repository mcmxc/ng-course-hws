import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsFilter',
  pure: false
})

export class CarsFilterPipe implements PipeTransform {
  transform(cars: string[], filter: string) {
    if (!filter.length) return cars;
    return cars.filter(el => el.startsWith(filter.toUpperCase()));
  }
}
