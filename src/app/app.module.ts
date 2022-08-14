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
import {LogResponseInterceptor} from "./core/log-response.interceptor";
import {CacheInterceptor} from "./core/cache.interceptor";
import {SingleblogComponent} from './singleblog/singleblog.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogsComponent,
        BlogComponent,
        ErrorComponent,
        SingleblogComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([{
            path: "", component: BlogsComponent, resolve: {resolvedBlogs: BlogResolver}
        },
            {
                path: "error", component: ErrorComponent
            },
            {
                path: ":id", component: SingleblogComponent
            },
            //     {path: '', redirectTo: '/blog', pathMatch: 'full'},
        ])
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: AddHeader, multi: true
    }, {
        provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true
    }, {
        provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}