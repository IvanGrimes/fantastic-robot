import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import * as config from './features/config';
import * as loading from './features/loading';
import * as errors from './features/errors';

export const { actions } = config;
export const selectors = { ...loading.selectors, ...config.selectors, ...errors.selectors };

export const reducer = combineReducers({
  config: config.reducer,
  loading: loading.reducer,
  errors: errors.reducer,
});

export const epic = combineEpics(config.epic);

export * from './model';
export { testEpic } from './utils';

export { config, loading, errors };
export { FiltersEnum } from './features/config';
export type {
  ComfortId,
  EquipmentId,
  InteriorId,
  StationId,
  PriceType,
  PhotoId,
  CityId,
  EquipmentTypeId,
  MetroList,
  Config,
} from './features/config';
export type {RequestError} from './features/errors'
