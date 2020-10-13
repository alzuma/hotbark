import { ICorrelationContext, IMessageHandler } from '../Handlers';
import { Hello } from './Hello';
import { Service } from '../DI/ServiceDecorator';

@Service()
export class HelloMessageHandler implements IMessageHandler<Hello> {
    HandleAsync(message: Hello, correlationContext: ICorrelationContext): Promise<void> {
        console.log('test');
        return Promise.resolve(undefined);
    }
}
