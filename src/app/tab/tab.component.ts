import { Component, inject } from '@angular/core';
import { ITab } from '../interfaces/tab';
import { TabService } from './tab.service';
import { ITabService, TabData } from '../interfaces/tab-service';

@Component({
  template: '',
  providers: [TabService],
})
export abstract class TabComponent implements ITab {
  service: ITabService = inject(TabService);
  data: TabData = this.service.readData();

  onChange(data: Partial<TabData>) {
    this.data = {...this.data, ...data};
    this.service.saveData(this.data);
  }
}
