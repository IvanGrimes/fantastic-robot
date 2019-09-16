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
    // eslint-disable-next-line camelcase
    metroList: payload.list.map(({ hex_color, stations, ...line }) => ({
      stations: stations.map(station => ({
        color: hex_color,
        ...station,
      })),
      ...line,
    })),
  })
);
