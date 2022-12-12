import {BlogsState} from "../../../blogs/types/blogsState-interface";
import {createReducer, on} from "@ngrx/store";
import * as BlogActions from './actions';

export const initialState: BlogsState = {
    isLoading: false,
    blogs: [],
    error: null,
    // online: false,
    // offline: false
};
export const reducers = createReducer(initialState,
    // on(BlogActions.online, (state, action) => ({
    //     ...state, online: true, offline: false
    // })),
    // on(BlogActions.offline, (state, action) => ({
    //     ...state, offline: true, online: false
    // })),
    on(BlogActions.getBlogs, (state) => ({
        ...state, isLoading: true
    })), on(BlogActions.getBlogsSuccess, (state, action) => ({
        ...state, isLoading: false, blogs: action.blogs
    })), on(BlogActions.getBlogsFailure, (state, action) => ({
        ...state, isLoading: false, error: action.error
    })), on(BlogActions.addBlogs, (state) => ({
        ...state, isLoading: false,
    })),
    on(BlogActions.addBlogsSuccess, (state, action) => ({
        ...state, isLoading: false, blogs: [...state.blogs, action.newBlog]
    })),
    on(BlogActions.addBlogsFailure, (state, action) => ({
        ...state, isLoading: false, error: action.error
    })),
    on(BlogActions.updateBlogs, (state) => ({
        ...state, isLoading: true,
    })), on(BlogActions.updateBlogsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        blogs: state.blogs.map((blog) => blog.id == action.newBlog.id ? {...blog, ...action.newBlog} : blog)
    })), on(BlogActions.updateBlogsFailure, (state, action) => ({
        ...state, isLoading: false, error: action.error
    })),
    on(BlogActions.deleteBlogs, (state) => ({
        ...state, isLoading: true,
    })), on(BlogActions.deleteBlogsSuccess, (state, action) => ({
        ...state, isLoading: false, blogs: state.blogs.filter((blog) => blog.id !== action.id)
    })),
    on(BlogActions.deleteBlogsFailure, (state, action) => ({
        ...state, isLoading: false, error: action.error
    }))
);