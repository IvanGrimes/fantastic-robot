import { createReducer } from 'typesafe-actions';
import { setHeaderVisibility, toggleMapVisibility } from './actions';

export type UIState = {
  isMapVisible: boolean;
  isHeaderVisible: boolean;
};

const initialState: UIState = {
  isMapVisible: true,
  isHeaderVisible: true,
};

export const uiReducer = createReducer(initialState)
  .handleAction(toggleMapVisibility, state => ({
    ...state,
    isMapVisible: !state.isMapVisible,
  }))
  .handleAction(setHeaderVisibility, (state, { payload }) => ({
    ...state,
    isHeaderVisible: payload.visibility,
  }));
