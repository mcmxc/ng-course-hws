import {Component, OnInit, ViewChild} from '@angular/core';

import getEdges from './helpers/getEdges'
import {SplitterDirective} from './splitter/splitter.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  onStylesApplied(e) {
    // console.log(getEdges(document.querySelector('.splitter-spot')))
  }
}
