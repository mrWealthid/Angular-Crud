import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators';
import {IBlog} from "./blog";

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(private http: HttpClient) {
    }

    getBlogs(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(' http://localhost:3000/posts').pipe(
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
        return this.http.delete<IBlog>(` http://localhost:3000/posts/${id}`,);
    }
}