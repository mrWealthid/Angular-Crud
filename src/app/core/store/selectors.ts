import {AppStateInterface} from "../../types/appState-interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => state.blogs;
export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const blogsSelector = createSelector(selectFeature, (state) => state.blogs);
export const errorSelector = createSelector(selectFeature, (state) => state.error);