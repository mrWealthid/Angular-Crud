import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../core/blog.service";
import {IBlog} from "../core/blog";

@Component({
    selector: 'app-singleblog',
    templateUrl: './singleblog.component.html',
    styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent implements OnInit {
    singleBlog: IBlog | undefined;

    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        // this.id = route.params.pipe(map(p => p['id']));  // this.id = route.params.pipe(map(p => p['id']));
    }

    ngOnInit(): void {
        this.blogService.getBlogById(+this.route.snapshot.params['id']).subscribe(data => this.singleBlog = data);
    }
}