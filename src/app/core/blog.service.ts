import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IBlog} from "./blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }


  getBlogs():Observable<IBlog[]> {
    return this.http.get<IBlog[]>(' http://localhost:3000/posts').pipe(
        tap((data)=> console.log(data))
    )
  }





}