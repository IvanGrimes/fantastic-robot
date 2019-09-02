import { createAction, createAsyncAction } from 'typesafe-actions';
import { FetchStudiosInput, Filters } from '../../../mocks/mockStudios';

export const fetchFiltersAsync = createAsyncAction(
  '@@studioFilters/FETCH_FILTERS_REQUEST',
  '@@studioFilters/FETCH_FILTERS_SUCCESS',
  '@@studioFilters/FETCH_FILTERS_FAIL'
)<undefined, Filters, any>();

export const setFilters = createAction(
  '@@studioFilters/SET_FILTERS',
  action => ({
    roomsCount,
    typeIds,
    priceSegments,
    stationIds,
    ...rest
  }: Omit<Omit<FetchStudiosInput, 'page'>, 'favorite'>) =>
    action({ roomsCount, typeIds, priceSegments, stationIds, ...rest })
);

export const clearFilters = createAction('@@studioFilters/CLEAR_FILTERS');
