export type TabData = Record<string, any>;

export interface ITabService {
    data: TabData;
    saveData(data: TabData):  void;
    readData(): TabData;
}