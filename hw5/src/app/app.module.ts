import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatNumberPipe } from './pipes/numbers.pipe';
import { FormsModule } from '@angular/forms';
import { BettingPipe } from './pipes/betting.pipe';

@NgModule({
  declarations: [AppComponent, FormatNumberPipe, BettingPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
