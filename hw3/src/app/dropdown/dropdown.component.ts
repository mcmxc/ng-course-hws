import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItem } from '../models/dropdownItem.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() items: DropdownItem[];
  @Output() itemPicked: EventEmitter<DropdownItem> = new EventEmitter();

  currentItem: DropdownItem = new DropdownItem('Choose item...', 'none');
  isShown = false;

  toggleDropdown(): void {
    this.isShown = !this.isShown;
  }

  pickItem(item): void {
    this.currentItem = item;
    this.toggleDropdown();
    this.itemPicked.emit(item);
  }
}
