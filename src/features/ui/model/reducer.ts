import { createReducer } from 'typesafe-actions';
import { setBottomNavigationVisibility, setHeaderVisibility } from './actions';

export type UIState = {
  isHeaderVisible: boolean;
  isBottomNavigationVisible: boolean;
};

const initialState: UIState = {
  isHeaderVisible: true,
  isBottomNavigationVisible: true,
};

export const uiReducer = createReducer(initialState)
  .handleAction(setHeaderVisibility, (state, { payload }) => ({
    ...state,
    isHeaderVisible: payload.visibility,
  }))
  .handleAction(setBottomNavigationVisibility, (state, { payload }) => ({
    ...state,
    isBottomNavigationVisible: payload.visibility,
  }));
