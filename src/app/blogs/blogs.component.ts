import {Component, OnInit} from '@angular/core';
import {IBlog} from "../core/blog";
import {BlogService} from "../core/blog.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as BlogsAction from "../core/store/Blogs/actions";
import {Observable} from "rxjs";
import {blogsSelector, errorSelector, isLoadingSelector} from "../core/store/Blogs/selectors";
import {AppStateInterface} from "../types/appState-interface";

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
    isLoading: boolean;
    isLoadings$: Observable<boolean>;
    blogs$: Observable<IBlog[]>;
    error$: Observable<string | null>;
    private gender: FormControl<any>;

    constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private store: Store<AppStateInterface>) {
        this.isLoadings$ = this.store.pipe(select(isLoadingSelector));
        this.blogs$ = this.store.pipe(select(blogsSelector));
        this.error$ = this.store.pipe(select(errorSelector));
    }

    ngOnInit(): void {
        this.store.dispatch(BlogsAction.getBlogs());
        this.blogs = this.activatedRoute.snapshot.data['resolvedBlogs'];
        // this.blogService.getBlogs().subscribe(data => this.blogs = data);
        this.title = new FormControl("", Validators.required);
        this.content = new FormControl<any>('', Validators.required);
        this.gender = new FormControl<any>(['male']);
        this.form = new FormGroup<any>({
            title: this.title,
            content: this.content,
            gender: this.gender
        });
    }

    handleDel(val: number) {
        this.store.dispatch(BlogsAction.deleteBlogs({id: val}));
        // this.isLoading = true;
        // this.blogService.deletePost(val).subscribe(_ => {
        //     this.isLoading = false;
        //     this.blogs = this.blogs.filter((item) => item.id !== val);
        // });
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
        const value = {...this.modified, title: val.title, content: val.content};
        this.isLoading = true;
        if (this.edit) {
            // let findIndex = this.blogs.findIndex((blog) => blog.id === this.modified.id);
            this.store.dispatch(BlogsAction.updateBlogs({newBlog: value}));
            this.form.reset();
            this.edit = false;
            // this.blogService.updatePost(this.modified.id, val).subscribe(data => {
            //     this.blogs[findIndex] = data;
            //     this.isLoading = false;
            //     this.form.reset();
            //     this.edit = false;
            // });
        } else {
            this.store.dispatch(BlogsAction.addBlogs({newBlog: val}));
            this.form.reset();
            // this.blogService.addPost(val).subscribe(data => {
            //     this.blogs.push(data);
            //     this.isLoading = false;
            //
            // });
        }
    }

    addComment() {
        console.log('tesr');
        this.blogService.addComment({
            id: 48,
            name: "Fresh",
            comment: "dgdgdgdgbsbsajajajjajaj"
        }).subscribe(data => console.log(data));
    }

    handleTest(data: any) {
        console.log(data);
    }
}