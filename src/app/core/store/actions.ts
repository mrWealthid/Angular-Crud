import {createAction, props} from "@ngrx/store";
import {IBlog} from "../blog";

export const getBlogs = createAction('[Blogs] Get Blogs');
export const getBlogsSuccess = createAction('[Blogs] Get BlogsSuccess', props<{ blogs: IBlog[] }>());
export const getBlogsFailure = createAction('[Blogs] Get BlogsFailure', props<{ error: string }>());
export const addBlogs = createAction('[Blogs] Add Blogs', props<{ newBlog: IBlog }>());
export const addBlogsSuccess = createAction('[Blogs] Add BlogsSuccess', props<{ newBlog: IBlog }>());
export const addBlogsFailure = createAction('[Blogs] Add BlogsFailure', props<{ error: string }>());
export const updateBlogs = createAction('[Blogs] Add Blogs', props<{ newBlog: IBlog }>());
export const deleteBlogs = createAction('[Blogs] Delete Blogs', props<{ id: string }>());