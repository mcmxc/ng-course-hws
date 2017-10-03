import { Component } from '@angular/core';

import { Car } from './../Car';

const CARS: Car[] = [
  {
    brand: 'Audi',
    models: []
  },
  {
    brand: 'BMW',
    models: []
  },
  {
    brand: 'Toyota',
    models: ['Auris', 'Yaris', 'Land Cruiser Prado', 'Land Cruiser 200']
  },
  {
    brand: 'Honda',
    models: []
  }
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  cars: Car[] = CARS;
}
