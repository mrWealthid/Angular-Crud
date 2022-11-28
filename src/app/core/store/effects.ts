import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as BlogActions from "./actions";
import {exhaustMap, map, mergeMap, of} from "rxjs";
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
    addBlogs$ = createEffect(() =>
        this.actions$.pipe(ofType(BlogActions.addBlogs),
            mergeMap((value) => {
                return this.blogService.addPost({
                    id: value.newBlog.id,
                    title: value.newBlog.title,
                    content: value.newBlog.content
                }).pipe(map(newBlog => BlogActions.addBlogsSuccess({newBlog})), catchError(error => of(BlogActions.getBlogsFailure({
                    error: error.message
                }))));
            }))
    );
    updateBlogs$ = createEffect(() =>
        this.actions$.pipe(ofType(BlogActions.updateBlogs),
            exhaustMap((value) => {
                return this.blogService.updatePost(value.newBlog
                ).pipe(map(newBlog => BlogActions.updateBlogsSuccess({
                    newBlog
                })), catchError(error => of(BlogActions.updateBlogsFailure({
                    error: error.message
                }))));
            }))
    );
    deleteBlog$ = createEffect(() =>
        this.actions$.pipe(ofType(BlogActions.deleteBlogs),
            exhaustMap((value) => {
                return this.blogService.deletePost(value.id
                ).pipe(map(_ => BlogActions.deleteBlogsSuccess({
                        id: value.id
                    },
                )), catchError(error => of(BlogActions.deleteBlogsFailure({
                    error: error.message
                }))));
            }))
    );

    constructor(private actions$: Actions, private blogService: BlogService) {
    }
}