import { ITabService, TabData } from "./tab-service";

export interface ITab {
    data: TabData;
    service: ITabService;
    onChange(data: TabData): void;
}