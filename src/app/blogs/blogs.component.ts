import { Component, OnInit } from '@angular/core';
import {IBlog} from "../core/blog";
import {BlogService} from "../core/blog.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    blogs: IBlog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data=> this.blogs = data)

  }

}