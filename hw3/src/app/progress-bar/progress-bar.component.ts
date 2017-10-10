import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['progress']);
  }
}
