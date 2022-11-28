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
import {ObjectLoopComponent} from './object-loop/object-loop.component';
import {TestViewChildComponent} from './test-view-child/test-view-child.component';
import {TestViewsComponent} from './test-views/test-views.component';
import {AdminComponent} from './admin/admin.component';
import {NgxLoadingModule} from "ngx-loading";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers} from "./core/store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {BlogsEffect} from "./core/store/effects";

@NgModule({
    declarations: [
        AppComponent,
        BlogsComponent,
        BlogComponent,
        ErrorComponent,
        SingleblogComponent,
        ObjectLoopComponent,
        TestViewChildComponent,
        TestViewsComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({blogs: reducers})
        ,
        EffectsModule.forRoot([BlogsEffect]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
            autoPause: true,
            // features: {
            //     pause: false,
            //     lock: true,
            //     persist: true
            // }
        }),
        HttpClientModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({
            // animationType: ngxLoadingAnimationTypes.rotatingPlane,
            backdropBackgroundColour: "rgba(0,0,0,0.1)",
            backdropBorderRadius: "4px",
            primaryColour: " #f16521",
            secondaryColour: " #f16521",
            tertiaryColour: "#1ca78b",
            fullScreenBackdrop: true
        }),
        RouterModule.forRoot([{
            path: "", component: BlogsComponent, resolve: {resolvedBlogs: BlogResolver}
        },
            {
                path: "admin", component: AdminComponent
            },
            {
                path: "error", component: ErrorComponent
            },
            {
                path: "loops", component: ObjectLoopComponent
            },
            {
                path: "viewChild", component: TestViewChildComponent
            },
            {
                path: "views", component: TestViewsComponent
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