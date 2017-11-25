import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    
      <h1>Multiselect component</h1>

      <form [formGroup]="form" (ngSubmit)="onSubmit($event)">

        <multiselect
          formControlName="multiselect"
          [(ngModel)]="selectedStates"
          required
        ></multiselect>
        
        <button class="btn btn-primary" type="submit">
          Submit
        </button>

      </form>

      <div class="selected-states" *ngIf="selectedStates.length">
        <h3>Selected states:</h3>
        <ul class="selected-states__list" >
          <li *ngFor="let state of selectedStates">{{state}}</li>
        </ul>
      </div>

      <span *ngIf="!form.get('multiselect') && form.get('multiselect').touched">form is invalidd</span>

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  selectedStates: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      multiselect: [null, Validators.required]
    });
  }

  onSubmit(e) {
    console.log(this.form.value);
  }
}
