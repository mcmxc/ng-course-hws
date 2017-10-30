import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SplitterDirective } from './splitter.directive';
import { SplitterSpotDirective } from './splitter-spot.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SplitterDirective, SplitterSpotDirective],
  exports: [SplitterDirective, SplitterSpotDirective]
})

export class SplitterModule {
  constructor() {}
}
