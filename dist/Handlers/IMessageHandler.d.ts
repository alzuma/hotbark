import { IMessage } from "../Messages/IMessage";
import { ICorrelationContext } from "./ICorrelationContext";
export interface IMessageHandler<T extends IMessage> {
    HandleAsync(message: T, correlationContext: ICorrelationContext): Promise<void>;
}
