import { createReducer } from 'typesafe-actions';
import {
  setFullscreenMap,
  setHeaderVisibility,
  setMapVisibility,
} from './actions';

export type UIState = {
  isMapVisible: boolean;
  isHeaderVisible: boolean;
  isFullscreenMap: boolean;
};

const initialState: UIState = {
  isMapVisible: true,
  isHeaderVisible: true,
  isFullscreenMap: false,
};

export const uiReducer = createReducer(initialState)
  .handleAction(setMapVisibility, (state, { payload }) => ({
    ...state,
    isMapVisible: payload.visibility,
  }))
  .handleAction(setHeaderVisibility, (state, { payload }) => ({
    ...state,
    isHeaderVisible: payload.visibility,
  }))
  .handleAction(setFullscreenMap, (state, { payload }) => ({
    ...state,
    isFullscreenMap: payload.visibility,
    isHeaderVisible: !payload.visibility,
  }));