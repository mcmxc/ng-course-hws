import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  public progress = '50';

  randomProgress() {
    this.progress = `${(Math.random() * 100).toFixed()}`;
  }
}
