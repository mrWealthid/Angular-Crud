import {Injectable} from '@angular/core';
import {
    HttpContextToken,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {HttpCacheService} from "./http-cache.service";
import {tap} from "rxjs/operators";
//This means by default I want to cache all request
export const CACHEABLE_REQUEST = new HttpContextToken(() => true);

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private cacheService: HttpCacheService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        //Cache Only Requests configured to be cacheable
        if (!request.context.get(CACHEABLE_REQUEST)) {
            return next.handle(request);
        }
        //pass along non-cacheable requests and invalidate cache
        if (request.method !== "GET") {
            console.log(`Invalidation Cache: ${request.method} ${request.url}`);
            this.cacheService.invalidateCache();
            return next.handle(request);
        }
        //attempt to retrieve a cached response
        const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(request.url);
        //return cached response
        if (cachedResponse) {
            console.log(`Returning a cached response: ${cachedResponse.url}`);
            console.log(cachedResponse);
            return of(cachedResponse);
        }
        //send request to server and add response to cache
        return next.handle(request).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                console.log(`Adding item to cache: ${request.url}`);
                this.cacheService.put(request.url, event);
            }
        }));
    }
}