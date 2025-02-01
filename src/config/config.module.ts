import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

export interface ConfigModuleOptions {
    api_key: string;
}
//TODO: Đây là 1 Dynamic module
@Module({})
export class ConfigModule {
    static register(options: ConfigModuleOptions): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: "API_KEY",
                    useValue: options.api_key,
                },
            ],
            exports: ['API_KEY']
        }
    }
}
