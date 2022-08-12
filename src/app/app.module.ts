import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogComponent} from './blog/blog.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ErrorComponent} from './error/error.component';
import {BlogResolver} from "./core/blog.resolver";
import {AddHeader} from "./core/add-header";

@NgModule({
    declarations: [
        AppComponent,
        BlogsComponent,
        BlogComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([{
            path: "", component: BlogsComponent, resolve: {resolvedBlogs: BlogResolver}
        }, {
            path: "error", component: ErrorComponent
        }])
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: AddHeader, multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}