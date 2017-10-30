import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplitterModule } from './splitter/index';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SplitterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
