import { ChipComponent } from './multiselect/chip/chip.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, MultiselectComponent, ChipComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
