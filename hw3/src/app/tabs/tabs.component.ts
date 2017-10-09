import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../models/tab.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[];
  currentTab: Tab;
  ngOnInit() {
    this.currentTab = this.tabs[0]; // first tab active by default
  }
  chooseTab(tab): void {
    this.currentTab = tab;
  }
  isActive(tab): boolean {
    return tab.label === this.currentTab.label;
  }
  constructor() {}
}
