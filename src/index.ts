import { Hello } from './Messages/Hello';

export * from './lib/Pair';
export * from './lib/Types';
export * from './Handlers/index';
import 'reflect-metadata';
import { Injector } from './DI/Injector';
import { HotBark } from './HotBark';
import { HelloMessageHandler } from './Messages/HelloMessageHandler';
import { HotBarkRegistry } from './HotBarkRegistry';

window.$hotbarkRegistry = Injector.resolve<HotBarkRegistry>(HotBarkRegistry);
window.$hotbark = Injector.resolve<HotBark>(HotBark);

$hotbark.subscribe(Hello, HelloMessageHandler);
