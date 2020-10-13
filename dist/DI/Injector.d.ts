import { Type } from "./Type";
import 'reflect-metadata';
export declare const Injector: {
    resolve<T>(target: Type<any>): T;
};
