import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log("🚀 ~ LoggingInterceptor ~ intercept ~ context:", context.switchToHttp().getRequest().user)
        console.log('Before.... ')
        return next.handle().pipe(
            tap(() => console.log(`After ${Date.now()}`)
            )
        )
    }
}