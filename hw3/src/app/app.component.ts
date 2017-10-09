import { Component } from '@angular/core';

import { DropdownItem } from './models/dropdownItem.model';
import { Tab } from './models/tab.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = '50';

  dropdownItems: DropdownItem[] = [
    new DropdownItem('Item 1', 'Item 1 value'),
    new DropdownItem('Item 2', 'Item 2 value'),
    new DropdownItem('Item 3', 'Item 3 value'),
    new DropdownItem('Item 4', 'Item 4 value'),
    new DropdownItem('Item 5', 'Item 5 value')
  ];

  tabs: Tab[] = [
    new Tab('One', 'Tab 1', 'Tab 1 content'),
    new Tab('Two', 'Tab 2', 'Tab 2 content'),
    new Tab('Three', 'Tab 3', 'Tab 3 content')
  ];

  randomizeProgress() {
    this.progress = `${(Math.random() * 100).toFixed()}`;
  }
}
