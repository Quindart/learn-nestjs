import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class DogsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Request middleware');
    req['user'] = {
      name: 'LMQ'
    }
    next();
  }
}
