import { createAction } from 'typesafe-actions';
import { FiltersState } from './reducer';

export const parse = createAction('CATALOG/FILTERS/PARSE')();

export const update = createAction('CATALOG/FILTERS/UPDATE')<
  DeepPartial<FiltersState['values']>
>();

export const clear = createAction('CATALOG/FILTERS/CLEAR')<
  (nextState: FiltersState['values']) => void
>();
