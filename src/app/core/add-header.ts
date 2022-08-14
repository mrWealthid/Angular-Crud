import {Injectable} from '@angular/core';
import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export const CONTENT_TYPE = new HttpContextToken(() => 'application/json');

@Injectable()
export class AddHeader implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log(`AddHeaderInterceptor- ${request.url}`);
        console.log(request);
        console.log('Progress Report' + " " + request.reportProgress);
        let jsonRequest: HttpRequest<any> = request.clone({
            setHeaders: {'Content-Type': request.context.get(CONTENT_TYPE)}
        });
        return next.handle(jsonRequest);
    }
}