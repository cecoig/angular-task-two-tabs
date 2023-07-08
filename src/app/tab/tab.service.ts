/**
 * This class is used for temporary storage for all the tabs.
 */
import { Injectable } from '@angular/core';
import { ChangeHandlerCallback, ITabService, TabData } from '../interfaces/tab-service';
import { StorageData } from '../interfaces/storage-service';

@Injectable({
  providedIn: 'root'
})
export class TabService implements ITabService {
  data: TabData = {
    tab1dropdownValue: '',
    tab1InputValue: '',
    tab2InputValue: '',
    tab2ListItems: [],
  };

  onChangeHandlerCallback!: ChangeHandlerCallback;

  saveData(data: TabData): void {
    this.data = data;

    if (this.onChangeHandlerCallback) {
      this.onChangeHandlerCallback(this.data);
    }
  }

  readData(): TabData {
    return this.data;
  }

  /**
   * Adds the listener for changes in the data
   * It can be extended to support adding multiple callback.
   * @param callback 
   */
  onChange(callback: ChangeHandlerCallback) {
    this.onChangeHandlerCallback = callback;
  }

  /**
   * Parses the data in the Storage format
   */
  toStorageData(): StorageData {
    return {
      field1: this.data.tab1InputValue,
      field2: this.data.tab1dropdownValue,
      field3: this.data.tab2ListItems,
    }
  }

  setData(data: StorageData): void {
    this.data =  {
      tab1InputValue: data.field1 || '',
      tab1dropdownValue: data.field2 || '',
      tab2InputValue: '',
      tab2ListItems: [...data.field3],
    };
  }
}
