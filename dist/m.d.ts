export interface IPortalMessageSubscription {
    unsubscribe: () => void;
}
export declare class PortalMessage {
    static emitMessageAsync: <T>(eventName: string, message: T) => void;
    static subscribe: (eventName: string, listener: EventListenerOrEventListenerObject) => IPortalMessageSubscription;
}
