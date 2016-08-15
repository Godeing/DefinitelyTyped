// Type definitions for lru-cache v2.5.0
// Project: https://github.com/isaacs/node-lru-cache
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function LRU<T>(opts: LRU.Options<T>): LRU.Cache<T>;
declare function LRU<T>(max: number): LRU.Cache<T>;

declare namespace LRU {
    interface Options<T> {
        max?: number;
        maxAge?: number;
        length?: (value: T) => number;
        dispose?: (key: any, value: T) => void;
        stale?: boolean;
    }

    interface Cache<T> {
        set(key: any, value: T): void;
        get(key: any): T;
        peek(key: any): T;
        has(key: any): boolean
        del(key: any): void;
        reset(): void;
        prune(): void;
        forEach(iter: (value: T, key: any, cache: Cache<T>) => void, thisp?: any): void;
        itemCount: number;
        length: number
        keys(): any[];
        values(): T[];
    }
}

export = LRU;