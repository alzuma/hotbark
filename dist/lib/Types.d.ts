export declare type Func<T, R> = (t: T) => R;
export declare type BiFunc<T, U, R> = (t: T, u: U) => R;
export declare type Supplier<T> = () => T;
export declare type Consumer<T> = (accept: T) => void;
export declare type BiConsumer<T, B> = (accept: T, b: B) => void;
export interface IIterable<T> {
    iterate: (accept: Consumer<T>) => void;
}
