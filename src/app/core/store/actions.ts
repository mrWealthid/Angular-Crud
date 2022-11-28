import {createAction, props} from "@ngrx/store";
import {IBlog} from "../blog";

export const getBlogs = createAction('[Blogs] Get Blogs');
export const getBlogsSuccess = createAction('[Blogs] Get BlogsSuccess', props<{ blogs: IBlog[] }>());
export const getBlogsFailure = createAction('[Blogs] Get BlogsFailure', props<{ error: string }>());