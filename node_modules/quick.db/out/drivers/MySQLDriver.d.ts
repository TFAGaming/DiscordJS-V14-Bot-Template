import { IDriver } from "./IDriver";
import type { mysqlModule, Pool, PoolConfig } from "promise-mysql";
export declare class MySQLDriver implements IDriver {
    mysql: mysqlModule;
    conn?: Pool;
    config: string | PoolConfig;
    constructor(config: string | PoolConfig);
    private checkConnection;
    connect(): Promise<void>;
    prepare(table: string): Promise<void>;
    getAllRows(table: string): Promise<{
        id: string;
        value: any;
    }[]>;
    getRowByKey<T>(table: string, key: string): Promise<[T | null, boolean]>;
    setRowByKey<T>(table: string, key: string, value: any, update: boolean): Promise<T>;
    deleteAllRows(table: string): Promise<number>;
    deleteRowByKey(table: string, key: string): Promise<number>;
}
