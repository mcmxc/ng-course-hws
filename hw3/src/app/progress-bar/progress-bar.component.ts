import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress: string;
  @Input() label: string;
  @Output()
  progressStarted: EventEmitter<ProgressBarComponent> = new EventEmitter();
  @Output()
  progressEnded: EventEmitter<ProgressBarComponent> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes['progress'];
    if (
      (previousValue === 0 || currentValue === 0) &&
      currentValue > previousValue
    ) {
      this.progressStarted.emit(this);
    } else if (currentValue === 100) {
      this.progressEnded.emit(this);
    }
  }
}
