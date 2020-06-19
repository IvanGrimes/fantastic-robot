import { createReducer } from 'typesafe-actions';
import { fetchMetroListAsync, fetchConfigAsync } from './actions';
import { Config, MetroList } from './services';

export type DataState = {
  config: Config;
  metroList: MetroList;
};

export const initialState: DataState = {
  metroList: [],
  config: {
    cities: [],
    comforts: [],
    equipmentTypes: [],
    equipments: [],
    interiors: [],
    filters: {},
    area: {
      min: 0,
      max: 0,
    },
    height: {
      min: 0,
      max: 0,
    },
    price: {
      min: 0,
      max: 0,
    },
  },
};

export const reducer = createReducer(initialState)
  .handleAction(fetchMetroListAsync.success, (state, action) => {
    return {
      ...state,
      metroList: action.payload,
    };
  })
  .handleAction(fetchConfigAsync.success, (state, action) => {
    return {
      ...state,
      config: action.payload,
    };
  });
