import { createReducer } from 'typesafe-actions';
import {
  setBottomNavigationVisibility,
  setHeaderVisibility,
  changeIsBot,
} from './actions';

export type UIState = {
  isHeaderVisible: boolean;
  isBottomNavigationVisible: boolean;
  isBot: boolean;
};

const initialState: UIState = {
  isHeaderVisible: true,
  isBottomNavigationVisible: true,
  isBot: false,
};

export const uiReducer = createReducer(initialState)
  .handleAction(setHeaderVisibility, (state, { payload }) => ({
    ...state,
    isHeaderVisible: payload.visibility,
  }))
  .handleAction(setBottomNavigationVisibility, (state, { payload }) => ({
    ...state,
    isBottomNavigationVisible: payload.visibility,
  }))
  .handleAction(changeIsBot, (state, { payload }) => ({
    ...state,
    isBot: payload.state,
  }));
