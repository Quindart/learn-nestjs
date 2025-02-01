import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private readonly apiKey: string, private readonly logger: LoggerService) { }
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi';
  }
  getApiKey(): string {
    return this.apiKey
  }
  getLogger(): void {
    this.logger.log("Hello global module")
  }
}
