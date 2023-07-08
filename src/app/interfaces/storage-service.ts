export type  StorageData = {
    field1?: string;
    field2?: string;
    field3: string[];
}

export interface IStorageService {
    /**
     * Save the data into the storage, which can be local storage, file system, DB and ect. 
     * @param data 
     */
    save(data: StorageData): Promise<void>;

    /**
     * REad the data into the storage, which can be local storage, file system, DB and ect.
     */
    read(): Promise<StorageData>;

    /**
     * Clear all data from the storage
     */
    clear(): Promise<void>;

    /**
     * Compares two versions of the data
     * @param value1 
     * @param value2 
     */
    isEqual(value1: StorageData, value2: StorageData): boolean;
}