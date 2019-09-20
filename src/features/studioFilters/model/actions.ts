import { createAction } from 'typesafe-actions';
import { FilterStudiosInput } from '../../studioList/model/api';

export const setFilters = createAction(
  '@@studioFilters/SET_FILTERS',
  action => (
    payload: Omit<Omit<Omit<FilterStudiosInput, 'page'>, 'size'>, 'city'>
  ) => action(payload)
);

export const clearFilters = createAction('@@studioFilters/CLEAR_FILTERS');
