import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators';
import {IBlog} from "./blog";
import {BEARER_TOKEN, CONTENT_TYPE} from "./add-header";
import {CACHEABLE_REQUEST} from "./cache.interceptor";

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(private http: HttpClient) {
    }

    //Setting Cacheable request to false using this set method .set(CACHEABLE_REQUEST, false); Would cause the request to be made always
    getBlogs(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(' http://localhost:3000/posts ', {context: new HttpContext().set(CONTENT_TYPE, 'application/xml').set(BEARER_TOKEN, false)})
            .pipe(
                tap((data) => console.log(data))
            );
    }

    addPost(newPost: IBlog): Observable<IBlog> {
        return this.http.post<IBlog>(' http://localhost:3000/posts', newPost);
    }

    updatePost(id: number, newPost: IBlog): Observable<IBlog> {
        return this.http.put<IBlog>(` http://localhost:3000/posts/${id}`, newPost);
    }

    deletePost(id: number): Observable<IBlog> {
        return this.http.delete<IBlog>(` http://localhost:3000/posts/${id}`, {context: new HttpContext().set(BEARER_TOKEN, false)});
    }

    getBlogById(id: number): Observable<IBlog> {
        return this.http.get<IBlog>(`http://localhost:3000/posts/${id}`, {context: new HttpContext().set(CACHEABLE_REQUEST, false)});
    }

    addComment(newComment: any): Observable<any> {
        return this.http.post<any>(' http://localhost:3000/comments', newComment);
    }

    //Mastering Rxjs
}