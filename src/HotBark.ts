import { Service } from './DI/ServiceDecorator';
import { BusSubscriber } from './Messages/BusSubscriber';
import { IBusSubscriber } from './Messages/IBusSubscriber';
import { Type } from './DI/Type';
import { IMessageHandler } from './Handlers';
import { IMessage } from './Messages/IMessage';

@Service()
export class HotBark {
    private busSubscriber: IBusSubscriber;

    constructor(busSubscriber: BusSubscriber) {
        this.busSubscriber = busSubscriber;
    }

    public subscribe(message: Type<IMessage>, handler: Type<IMessageHandler<IMessage>>): IBusSubscriber {
        this.busSubscriber.subscribe(message, handler);
        return this.busSubscriber;
    }
}
