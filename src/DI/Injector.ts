import { Type } from './Type';
import 'reflect-metadata';

export const Injector = new (class {
    resolve<T>(target: Type<any>): T {
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [];

        let injections = tokens.map((token: Type<any>) => Injector.resolve<any>(token));
        return new target(...injections);
    }
})();
