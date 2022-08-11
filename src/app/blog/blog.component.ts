import {Component, Input, OnInit} from '@angular/core';
import {IBlog} from "../core/blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  @Input()
  blogs:IBlog[]

  ngOnInit(): void {
  }

}