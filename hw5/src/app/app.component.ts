import { Component, OnInit } from '@angular/core';

// import { CarsFilterPipe } from './pipes/carsFilter.pipe';

import { BetType } from './helpers/BetType';

import CARS from './helpers/cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberFormats: string[] = ['binary', 'decimal', 'hex'];
  oddFormats: BetType[] = [
    new BetType('European', 'eu'),
    new BetType('American', 'us'),
    new BetType('British', 'uk')
  ];

  pickedFormat = 'decimal';
  num: number;

  odd: string;

  car = '';

  CARS: string[] = CARS;
}
