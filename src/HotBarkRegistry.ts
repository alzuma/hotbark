import { Service } from './DI/ServiceDecorator';
import { Type } from './DI/Type';
import { IMessageHandler } from './Handlers';
import { IMessage } from './Messages/IMessage';
import { Injector } from './DI/Injector';

@Service()
export class HotBarkRegistry {
    private registry = new Map<string, Type<any>>();

    public register(message: Type<IMessage>, handler: Type<IMessageHandler<IMessage>>) {
        this.registry.set(message.name, handler);
    }

    public get<T extends IMessage>(message: Type<T>): IMessageHandler<T> {
        let handlerType = this.registry.get(message.name);
        return Injector.resolve<IMessageHandler<T>>(handlerType);
    }

    public getByName<T extends IMessage>(name: string): IMessageHandler<T> {
        let handlerType = this.registry.get(name);
        return Injector.resolve<IMessageHandler<T>>(handlerType);
    }
}
