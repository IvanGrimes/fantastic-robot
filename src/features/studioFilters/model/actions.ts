import { createAction, createAsyncAction } from 'typesafe-actions';
import { FetchStudiosInput, Filters } from '../../studios/model/api';

export const fetchFiltersAsync = createAsyncAction(
  '@@STUDIOS/FETCH_FILTERS_REQUEST',
  '@@STUDIOS/FETCH_FILTERS_SUCCESS',
  '@@STUDIOS/FETCH_FILTERS_FAIL'
)<undefined, Filters, any>();

export const setFilters = createAction(
  '@@STUDIOS/SET_FILTERS',
  action => ({
    roomsCount,
    typeIds,
    priceSegments,
    stationIds,
    ...rest
  }: Omit<Omit<FetchStudiosInput, 'page'>, 'favorite'>) =>
    action({ roomsCount, typeIds, priceSegments, stationIds, ...rest })
);

export const clearFilters = createAction('@@STUDIOS/CLEAR_FILTERS');
