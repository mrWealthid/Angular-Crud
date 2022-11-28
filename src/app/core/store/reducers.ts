import {BlogsState} from "../../blogs/types/blogsState-interface";
import {createReducer, on} from "@ngrx/store";
import * as BlogActions from './actions';

export const initialState: BlogsState = {
    isLoading: false,
    blogs: [],
    error: null
};
export const reducers = createReducer(initialState, on(BlogActions.getBlogs, (state) => ({
    ...state, isLoading: true
})), on(BlogActions.getBlogsSuccess, (state, action) => ({
    ...state, isLoading: false, blogs: action.blogs
})), on(BlogActions.getBlogsFailure, (state, action) => ({
    ...state, isLoading: false, error: action.error
})));