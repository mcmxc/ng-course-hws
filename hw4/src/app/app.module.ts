import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumHighlightDirective } from './directives/numHighlight.directive';
import { DragzoneDirective } from './directives/dragzone.directive';
import { TranslateDirective } from './directives/translate.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumHighlightDirective,
    TranslateDirective,
    DragzoneDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
