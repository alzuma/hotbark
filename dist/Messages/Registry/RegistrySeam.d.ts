import { IMessage } from "../IMessage";
import { BiConsumer, IMessageHandler } from "../..";
import { Type } from "../../DI/Type";
export declare class RegistrySeam<T extends IMessage> {
    private store;
    private message;
    constructor(store: BiConsumer<Type<IMessageHandler<IMessage>>, Type<IMessage>>, message: Type<IMessage>);
    handledBy(handler: Type<IMessageHandler<T>>): void;
}
