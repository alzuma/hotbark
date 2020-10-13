import { Type } from "./DI/Type";
import { IMessageHandler } from "./Handlers";
import { IMessage } from "./Messages/IMessage";
export declare class HotBarkRegistry {
    private registry;
    register(message: Type<IMessage>, handler: Type<IMessageHandler<IMessage>>): void;
    get<T extends IMessage>(message: Type<T>): IMessageHandler<T>;
    getByName<T extends IMessage>(name: string): IMessageHandler<T>;
}
