import {
  Component,
  forwardRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import STATES from './../helpers/STATES';

@Component({
  selector: 'multiselect',
  template: `
    <div class="multiselect-wrapper" #wrapper>
      <chip 
        *ngFor="let item of selected"
        [item]="item"
        (itemRemoved)="onItemRemoved($event)"
      ></chip>
      <input
        type="text"
        class="multiselect__input"
        [(ngModel)]="value"
        [ngbTypeahead]="search"
        (selectItem)="onSelectItem($event)"
        (blur)="onBlur()"
        autofocus
      />
    </div>
  `,
  styleUrls: ['./multiselect.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiselectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiselectComponent implements ControlValueAccessor {
  private value: string;
  selected: string[] = [];

  onItemRemoved(e) {
    this.selected.splice(this.selected.indexOf(e), 1);
    this.propagateChange(this.selected);
  }

  onSelectItem(e) {
    e.preventDefault();
    this.selected.push(e.item);
    this.value = '';
    this.propagateChange(this.selected);
    this.onTouched();
  }
  onBlur() {
    this.onTouched();
  }
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(
        term =>
          term.length < 2
            ? []
            : STATES.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
                .filter(el => !this.selected.includes(el))
                .slice(0, 10)
      );
  propagateChange = (_: any) => {};
  onTouched = () => {};
  writeValue(value) {
    this.value = value;
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
