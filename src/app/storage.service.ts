import { Injectable } from '@angular/core';
import { IStorageService, StorageData } from './interfaces/storage-service';

const localStorageKey = 'tabs-app'

@Injectable({
  providedIn: 'root'
})
export class StorageService implements IStorageService {
  async save(data: StorageData): Promise<void> {
    const json = JSON.stringify(data);
    window.localStorage.setItem(localStorageKey,json);
  }

  async read(): Promise<StorageData> {
    const storageData = window.localStorage.getItem(localStorageKey);
    const data = JSON.parse(storageData!);
    return data;
  }

  async clear(): Promise<void> {
    window.localStorage.removeItem(localStorageKey);
  }

  isEqual(value1: StorageData, value2: StorageData): boolean {  
    if (value1.field1 !== value2.field1 || value1.field2 !== value2.field2) {
      return false;
    }    

    if (value1.field3.length !== value2.field3.length) {
      return false;
    }

    for (let i = 0; i < value1.field3.length; i++) {
      if (value1.field3[i] !== value2.field3[i]) {
        return false;
      }
    }
    
    return true;
  }
}
