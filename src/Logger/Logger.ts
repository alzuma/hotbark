import { Service } from '../DI/ServiceDecorator';

@Service()
export class Logger {
    log(message: string) {
        console.log(message);
    }
}
