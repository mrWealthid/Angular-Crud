import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IBlog} from "./blog";
import {catchError} from 'rxjs/operators';
import {BlogService} from "./blog.service";

@Injectable({
    providedIn: 'root'
})
export class BlogResolver implements Resolve<IBlog[]> {
    constructor(private blogService: BlogService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBlog[]> {
        return this.blogService.getBlogs()
            .pipe(catchError(err => {
                this.router.navigate(['error']);
                return of(err);
            }));
    }
}