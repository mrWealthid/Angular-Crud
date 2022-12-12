import {createReducer, on} from "@ngrx/store";
import * as NetworkActions from './actions';

export interface NetworkState {
    offline: Boolean,
    online: Boolean
}

export const initialState: NetworkState = {
    offline: false,
    online: false
};
export const networkReducers = createReducer(initialState,
    on(NetworkActions.online, (state) => ({
        ...state, offline: false, online: true
    })),
    on(NetworkActions.offline, (state) => ({
        ...state, online: false, offline: true
    }))
);