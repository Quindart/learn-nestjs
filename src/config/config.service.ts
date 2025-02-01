import { Injectable } from '@nestjs/common';

//TODO: Create config service get ra folder
@Injectable()
export class ConfigService {
    constructor(private options: { api_key: string }) { }
    getFolder(): string {
        return this.options.api_key
    }
}
