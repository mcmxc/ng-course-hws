import { Component, OnInit } from '@angular/core';

import { BetType } from './helpers/BetType';

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
}
