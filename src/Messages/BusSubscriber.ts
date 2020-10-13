import { IMessage } from './IMessage';
import { IMessageHandler } from '../Handlers';
import { Type } from '../DI/Type';
import { Service } from '../DI/ServiceDecorator';
import { IBusSubscriber } from './IBusSubscriber';

@Service()
export class BusSubscriber implements IBusSubscriber {
    public subscribe<TMessage extends IMessage, THandler extends IMessageHandler<IMessage>>(
        message: Type<TMessage>,
        handler: Type<THandler>,
    ): BusSubscriber {
        $hotbarkRegistry.register(message, handler);
        return this;
    }
}
