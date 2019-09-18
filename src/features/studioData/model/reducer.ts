import { createReducer } from 'typesafe-actions';
import { ConfigObject, PriceType, MetroStation } from './types';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

export type DataReducer = {
  metroList: MetroStation[] | [];
  config: ConfigObject & { price: PriceType[] };
};

const initialState: DataReducer = {
  metroList: [],
  config: {
    context: [],
    equipment: [],
    interior: [],
    price: ['1', '2', '3'],
  },
};

export const studioDataReducer = createReducer(initialState)
  .handleAction(fetchMetroListAsync.success, (state, { payload }) => ({
    ...state,
    metroList: payload.list
      // eslint-disable-next-line camelcase
      .map(({ hex_color, name, stations, ...line }) => ({
        stations: stations.map(station => ({
          color: hex_color,
          value: name,
          ...station,
        })),
        ...line,
      }))
      .reduce<MetroStation[]>((acc, line) => [...acc, ...line.stations], [])
      .sort(
        (a, b) =>
          a.value.toLowerCase().charCodeAt(0) -
          b.value.toLowerCase().charCodeAt(0)
      ),
  }))
  .handleAction(fetchConfigAsync.success, (state, { payload }) => ({
    ...state,
    config: {
      ...state.config,
      ...payload.config,
    },
  }));
