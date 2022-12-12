import {AppStateInterface} from "../../../types/appState-interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => state.network;
export const isOnline = createSelector(selectFeature, (state) => state.online);
export const isOffline = createSelector(selectFeature, (state) => state.offline);