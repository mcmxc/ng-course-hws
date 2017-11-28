import { Component } from '@angular/core';
import { OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    
      <h1>Multiselect component</h1>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <multiselect
          formControlName="multiselect"
          [(ngModel)]="selectedStates"
        ></multiselect>
        
        <button type="submit" [disabled]="form.invalid && form.touched">Submit</button>

      </form>

      <div class="error-msg" *ngIf="form.get('multiselect').touched && form.get('multiselect').errors?.noStates">
        Please choose at least one state
      </div>

      <div class="selected-states" *ngIf="selectedStates.length">
        <h3>Selected states:</h3>
        <ul class="selected-states__list" >
          <li *ngFor="let state of selectedStates">{{state}}</li>
        </ul>
      </div>

    </div>
  `,
  styleUrls: ['./app.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  form: FormGroup;
  selectedStates: string[] = [];

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      multiselect: new FormControl(
        [],
        [Validators.required, this.validateStates.bind(this)]
      )
    });
  }

  validateStates(control: FormControl) {
    if (!control.value.length) {
      return { noStates: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
