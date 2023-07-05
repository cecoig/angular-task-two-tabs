import { Injectable } from '@angular/core';
import { ITabService, TabData } from '../interfaces/tab-service';


@Injectable({
  providedIn: 'root'
})
export class TabService implements ITabService {
  data: TabData = {};

  constructor() {
    console.log('create tab service');
  }

  saveData(data: TabData): void {
    this.data = data;
  }

  readData(): TabData {
    return this.data;
  }
}
