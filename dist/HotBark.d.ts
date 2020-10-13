import { BusSubscriber } from "./Messages/BusSubscriber";
import { IBusSubscriber } from "./Messages/IBusSubscriber";
import { Type } from "./DI/Type";
import { IMessageHandler } from "./Handlers";
import { IMessage } from "./Messages/IMessage";
export declare class HotBark {
    private busSubscriber;
    constructor(busSubscriber: BusSubscriber);
    subscribe(message: Type<IMessage>, handler: Type<IMessageHandler<IMessage>>): IBusSubscriber;
}
