import {createAction, props} from "@ngrx/store";
import {IBlog} from "../../blog";

export const getBlogs = createAction('[Blogs] Get Blogs');
export const getBlogsSuccess = createAction('[Blogs] Get BlogsSuccess', props<{ blogs: IBlog[] }>());
export const getBlogsFailure = createAction('[Blogs] Get BlogsFailure', props<{ error: string }>());
export const addBlogs = createAction('[Blogs] Add Blogs', props<{ newBlog: IBlog }>());
export const addBlogsSuccess = createAction('[Blogs] Add BlogsSuccess', props<{ newBlog: IBlog }>());
export const addBlogsFailure = createAction('[Blogs] Add BlogsFailure', props<{ error: string }>());
export const updateBlogs = createAction('[Blogs] Update Blogs', props<{ newBlog: IBlog }>());
export const updateBlogsSuccess = createAction('[Blogs] Update BlogsSuccess', props<{ newBlog: IBlog }>());
export const updateBlogsFailure = createAction('[Blogs] Update BlogsFailure', props<{ error: string }>());
export const deleteBlogs = createAction('[Blogs] Delete Blogs', props<{ id: number }>());
export const deleteBlogsSuccess = createAction('[Blogs] Delete BlogsSuccess', props<{ id: number }>());
export const deleteBlogsFailure = createAction('[Blogs] Delete BlogsFailure', props<{ error: string }>());
// export const online = createAction('[Blogs] Online');
// export const offline = createAction('[Blogs] Offline');