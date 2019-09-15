import { createReducer } from 'typesafe-actions';
import { MetroList } from './types';
import { fetchMetroListAsync } from './actions';

export type DataReducer = {
  metroList: MetroList;
};

const initialState: DataReducer = {
  metroList: [],
};

export const studioDataReducer = createReducer(initialState).handleAction(
  fetchMetroListAsync.success,
  (state, { payload }) => ({
    ...state,
    metroList: payload.list,
  })
);
