import {BlogsState} from "../blogs/types/blogsState-interface";
import {NetworkState} from "../core/store/Network/reducers";

export interface AppStateInterface {
    blogs: BlogsState;
    network: NetworkState;
}