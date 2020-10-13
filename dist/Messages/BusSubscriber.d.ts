import { IMessage } from "./IMessage";
import { IMessageHandler } from "../Handlers";
import { Type } from "../DI/Type";
import { IBusSubscriber } from "./IBusSubscriber";
export declare class BusSubscriber implements IBusSubscriber {
    subscribe<TMessage extends IMessage, THandler extends IMessageHandler<IMessage>>(message: Type<TMessage>, handler: Type<THandler>): BusSubscriber;
}
