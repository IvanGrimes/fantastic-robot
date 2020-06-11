import { createAction } from 'typesafe-actions';
import { FiltersState } from './reducer';

export const parse = createAction('CATALOG/FILTERS/PARSE')();

export const update = createAction('CATALOG/FILTERS/UPDATE')<
  DeepPartial<FiltersState>
>();

export const clear = createAction('CATALOG/FILTERS/CLEAR');
