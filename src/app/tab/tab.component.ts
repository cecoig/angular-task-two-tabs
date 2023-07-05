import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITab } from '../interfaces/tab';
import { TabService } from './tab.service';
import { ITabService, TabData } from '../interfaces/tab-service';

@Component({
  template: '',
  providers: [TabService],
})
export class TabComponent implements ITab {
  service: ITabService = inject(TabService);
  data: TabData = {};

  constructor() {
    this.data = this.service.readData();
  }

  onChange(data: TabData) {
    this.data = {...this.data, ...data};
    this.service.saveData(this.data);
  }
}
