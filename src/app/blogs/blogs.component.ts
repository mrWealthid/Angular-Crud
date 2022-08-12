import {Component, OnInit} from '@angular/core';
import {IBlog} from "../core/blog";
import {BlogService} from "../core/blog.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    blogs: IBlog[];
    form: FormGroup;
    title: FormControl;
    content: FormControl;
    edit: boolean;
    modified: IBlog;

    constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.blogs = this.activatedRoute.snapshot.data['resolvedBlogs'];
        // this.blogService.getBlogs().subscribe(data => this.blogs = data);
        this.title = new FormControl<any>("");
        this.content = new FormControl<any>('');
        this.form = new FormGroup<any>({
            title: this.title,
            content: this.content
        });
    }

    handleDel(val: number) {
        this.blogService.deletePost(val).subscribe(_ => {
            this.blogs = this.blogs.filter((item) => item.id !== val);
        });
    }

    handleEdit(val: IBlog) {
        this.modified = val;
        this.form.patchValue({
            title: val.title,
            content: val.content
        });
        this.edit = true;
    }

    submitValues(val: IBlog) {
        if (this.edit) {
            let findIndex = this.blogs.findIndex((blog) => blog.id === this.modified.id);
            this.blogService.updatePost(this.modified.id, val).subscribe(data => {
                this.blogs[findIndex] = data;
            });
            this.edit = false;
        } else {
            this.blogService.addPost(val).subscribe(data => {
                this.blogs.push(data);
            });
        }
    }
}