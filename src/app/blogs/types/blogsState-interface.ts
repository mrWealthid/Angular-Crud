import {IBlog} from "./blogs-interface";

export interface BlogsState {
    isLoading: boolean;
    blogs: IBlog[];
    error: string | null;
}