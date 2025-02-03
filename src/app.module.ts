import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat.controller';
import { DogsModule } from './dogs/dogs.module';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';
import { DogsMiddleware } from './dogs/dogs.middleware';
import helmet from 'helmet';

@Module({
  imports: [DogsModule, ConfigModule.register({ api_key: 'KEY_ABC' }), LoggerModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DogsMiddleware, helmet()).forRoutes('dogs')
  }
}
