import { HotBark } from './HotBark';
import { HotBarkRegistry } from './HotBarkRegistry';

declare global {
    interface Window {
        $hotbark: HotBark;
    }
}

declare global {
    let $hotbark: HotBark;
}

declare global {
    interface Window {
        $hotbarkRegistry: HotBarkRegistry;
    }
}

declare global {
    let $hotbarkRegistry: HotBarkRegistry;
}
