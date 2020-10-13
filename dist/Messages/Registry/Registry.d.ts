import { IMessage } from "../IMessage";
import { Type } from "../../DI/Type";
import { RegistrySeam } from "./RegistrySeam";
export declare class Registry {
    static message<T extends IMessage>(message: Type<T>): RegistrySeam<T>;
    private static store;
}
