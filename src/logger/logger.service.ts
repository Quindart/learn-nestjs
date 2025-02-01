import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    log(mess: string) {
        console.log(`[LOG] mess - ${mess}`)
    }
    error(message: string) {
        console.error(`[ERROR] ${message}`);
    }
}
