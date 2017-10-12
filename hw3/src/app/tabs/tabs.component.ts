import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.pickTab(this.tabs.first);
  }

  pickTab(tab: TabComponent): void {
    this.resetActive();
    tab.isActive = true;
  }

  resetActive(): void {
    this.tabs.forEach((tab: TabComponent) => {
      tab.isActive = false;
    });
  }

  constructor() {}
}
