export interface IDriver {
    setRowByKey<T>(table: string, key: string, value: any, update: boolean): Promise<T>;
    prepare(table: string): Promise<void>;
    deleteAllRows(table: string): Promise<number>;
    deleteRowByKey(table: string, key: string): Promise<number>;
    getRowByKey<T>(table: string, key: string): Promise<[T | null, boolean]>;
    getAllRows(table: string): Promise<{
        id: string;
        value: any;
    }[]>;
}
