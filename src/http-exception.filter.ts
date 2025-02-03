// import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
// import { Request, Response } from "express";

// export class HttpExceptionFilter implements ExceptionFilter {
//     catch(exception: any, host: ArgumentsHost) {
//         const ctx = host.switchToHttp();
//         const res = ctx.getResponse<Response>()
//         const req = ctx.getResponse<Request>()
//         const status = exception.getStatus();
//         res.status(status).json({
//             statusCode: status,
//             timestamp: new Date().toISOString(),
//             path: req.url ? req.url : null,
//             message: exception.
//         })
//     }
// }


import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        super.catch(exception, host)
    }
}