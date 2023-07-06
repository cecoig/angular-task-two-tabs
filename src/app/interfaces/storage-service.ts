export type  StorageData = {
    field1?: string;
    field2?: string;
    field3: string[];
}

export interface IStorageService {
    save(data: StorageData): Promise<void>;
    read(): Promise<StorageData>;
    clear(): Promise<void>;
    isEqual(value1: StorageData, value2: StorageData): boolean;
}