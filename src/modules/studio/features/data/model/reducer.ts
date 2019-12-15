import { createReducer } from 'typesafe-actions';
import { ConfigObject, PriceType, MetroStation } from './types';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

export type DataState = {
  metroList: MetroStation[] | [];
  config: ConfigObject & { price: PriceType[] };
};

const initialState: DataState = {
  metroList: [],
  config: {
    context: [],
    equipment: [],
    interior: [],
    price: ['1', '2', '3'],
  },
};

export const dataReducer = createReducer(initialState)
  .handleAction(fetchMetroListAsync.success, (state, { payload }) => ({
    ...state,
    metroList: payload.list
      // eslint-disable-next-line camelcase
      .map(({ hex_color, stations, ...line }) => ({
        stations: stations.map(({ name, ...station }) => ({
          // eslint-disable-next-line camelcase
          color: `#${hex_color}`,
          value: name,
          ...station,
        })),
        ...line,
      }))
      .reduce<MetroStation[]>((acc, line) => [...acc, ...line.stations], [])
      .sort((a, b) => a.value.localeCompare(b.value)),
  }))
  .handleAction(fetchConfigAsync.success, (state, { payload }) => ({
    ...state,
    config: {
      ...state.config,
      ...payload.config,
    },
  }));
