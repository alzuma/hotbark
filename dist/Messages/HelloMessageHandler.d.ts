import { ICorrelationContext, IMessageHandler } from "../Handlers";
import { Hello } from "./Hello";
export declare class HelloMessageHandler implements IMessageHandler<Hello> {
    HandleAsync(message: Hello, correlationContext: ICorrelationContext): Promise<void>;
}
