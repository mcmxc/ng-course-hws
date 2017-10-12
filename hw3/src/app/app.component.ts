import { Component } from '@angular/core';

import { DropdownItem } from './models/dropdownItem.model';

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

  randomizeProgress(): void {
    this.progress = `${(Math.random() * 100).toFixed()}`;
  }

  onProgressStarted(e): void {
    alert(`${e.label}'s progress has started`);
  }

  onProgressEnded(e): void {
    alert(`${e.label}'s progress has ended`);
  }

  onDropdownChange(item): void {
    console.log(`${item.name} was picked with a value of ${item.value}`);
  }

  testButton() {
    // test event (for elements within a particular tab)
    alert('it works');
  }
}
