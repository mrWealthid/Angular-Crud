import {Injectable} from '@angular/core';
import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export const CONTENT_TYPE = new HttpContextToken(() => 'application/json');
export const BEARER_TOKEN = new HttpContextToken(() => true);

@Injectable()
export class AddHeader implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.context.get(BEARER_TOKEN)) {
            return next.handle(request);
        }
        console.log(`AddHeaderInterceptor- ${request.url}`);
        console.log(request);
        console.log('Progress Report' + " " + request.reportProgress);
        let jsonRequest: HttpRequest<any> = request.clone({
            // setHeaders: {'Content-Type': request.context.get(CONTENT_TYPE)}
            setHeaders: {
                "Authorization": `Bearer 39494994949494949`
            }
        });
        return next.handle(jsonRequest);
    }
}