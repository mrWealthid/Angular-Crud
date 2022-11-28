import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBlog} from "../core/blog";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    @Input()
    blogs: IBlog[] | null;
    @Output()
    Edit = new EventEmitter();
    @Output()
    Delete = new EventEmitter();
    @Output()
    Testers = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    handleEdit(blog: IBlog) {
        this.Edit.emit(blog);
    }

    handleDelete(id: number) {
        this.Delete.emit(id);
    }

    handleTest() {
        this.Testers.emit({
            name: "test",
            id: 2223
        });
    }
}