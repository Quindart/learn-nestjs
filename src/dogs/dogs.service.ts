import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    private readonly list: string[] = []
    addToList(name: string) {
        this.list.push(name)
    }
    removeList(name: string) {
        let indexDog = this.list.indexOf(name)
        if (indexDog !== -1) {
            this.list.slice(indexDog, indexDog + 1)
        }
    }
}
