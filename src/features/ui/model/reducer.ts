import { createReducer } from 'typesafe-actions';
import { toggleMap } from './actions';

export type UIState = {
  isMapVisible: boolean;
};

const initialState: UIState = {
  isMapVisible: true,
};

export const uiReducer = createReducer(initialState).handleAction(
  toggleMap,
  state => ({
    ...state,
    isMapVisible: !state.isMapVisible,
  })
);
