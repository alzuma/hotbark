export interface IPortalMessageSubscription {
    unsubscribe: () => void;
}

export class PortalMessage {
    public static emitMessageAsync = <T>(eventName: string, message: T) => {
        Promise.resolve().then(() => {
            const event = new CustomEvent<T>(eventName, { detail: message });
            Promise.resolve().then(() => window.dispatchEvent(event));
        });
    };

    public static subscribe = (
        eventName: string,
        listener: EventListenerOrEventListenerObject,
    ): IPortalMessageSubscription => {
        window.addEventListener(eventName, listener);
        return {
            unsubscribe: () => window.removeEventListener(eventName, listener),
        };
    };
}
/*

 */
