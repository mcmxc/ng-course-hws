import { ReactiveFormsModule } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chip',
  template: `
    <span class="chip">
      <span class="value">{{value}}</span>
      <span class="remove" (click)="removeItem($event)">&times;</span>
    </span>
  `,
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  value: string;

  @Input('item') item: string;
  @Output('itemRemoved') itemRemoved: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.value = this.item;
  }

  removeItem(e) {
    this.itemRemoved.emit(this.value);
  }
}
