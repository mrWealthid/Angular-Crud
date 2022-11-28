import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as BlogActions from "./actions";
import {map, mergeMap, of} from "rxjs";
import {BlogService} from "../blog.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class BlogsEffect {
    getBlogs$ = createEffect(() =>
        this.actions$.pipe(ofType(BlogActions.getBlogs), mergeMap(() => {
            return this.blogService.getBlogs().pipe(map(blogs => BlogActions.getBlogsSuccess({blogs})), catchError(error => of(BlogActions.getBlogsFailure({
                error: error.message
            }))));
        }))
    );

    constructor(private actions$: Actions, private blogService: BlogService) {
    }
}