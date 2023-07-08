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
    /**
     * Save the data into the TabService
     * @param data 
     */
    saveData(data: Partial<TabData>):  void;

    /**
     * Read the data
     */
    readData(): TabData;

    /**
     * Add a listener for changes into the data
     * @param callback 
     */
    onChange(callback: ChangeHandlerCallback): void;

    /**
     * Convert the service data to Storage data format
     */
    toStorageData(): StorageData;

    /**
     * Set data
     * @param data
     */
    setData(data: StorageData): void;
}