import { createReducer } from 'typesafe-actions';
import { ConfigObject, MetroList } from './types';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

export type DataReducer = {
  metroList: MetroList;
  config: ConfigObject;
};

const initialState: DataReducer = {
  metroList: [],
  config: {
    context: [],
    equipment: [],
    interior: [],
  },
};

export const studioDataReducer = createReducer(initialState)
  .handleAction(fetchMetroListAsync.success, (state, { payload }) => ({
    ...state,
    // eslint-disable-next-line camelcase
    metroList: payload.list.map(({ hex_color, stations, ...line }) => ({
      stations: stations.map(station => ({
        color: hex_color,
        ...station,
      })),
      ...line,
    })),
  }))
  .handleAction(fetchConfigAsync.success, (state, { payload }) => ({
    ...state,
    config: payload.config,
  }));
