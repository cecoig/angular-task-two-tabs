import { StorageData } from "./storage-service";

export type TabData = {
    tab1InputValue: string;
    tab1dropdownValue: string,
    tab2InputValue: string,
    tab2ListItems: string[],
};

export type ChangeHandlerCallback =  (newData: TabData) => void;

export interface ITabService {
    data: TabData;
    saveData(data: Partial<TabData>):  void;
    readData(): TabData;
    onChange(callback: ChangeHandlerCallback): void;
    toStorageData(): StorageData;
}