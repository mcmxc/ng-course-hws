import { Component, OnInit } from '@angular/core';

import CARS from './helpers/cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberFormats: string[] = ['binary', 'decimal', 'hex'];
  num: number;

  pickedFormat = 'decimal';

  odd = '';

  CARS: string[] = CARS;
  car = '';
}
