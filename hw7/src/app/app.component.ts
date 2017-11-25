import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    
      <h1>Multiselect component</h1>

      <form [formGroup]="form" (ngSubmit)="onSubmit($event)">

        <multiselect
          formControlName="multiselect"
          [(ngModel)]="selectedStates"
        ></multiselect>
        
        <button class="btn btn-primary" type="submit">
          Submit
        </button>

      </form>

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  selectedStates: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      multiselect: []
    });
  }

  onSubmit(e) {
    console.log(this.form.value);
  }
}
