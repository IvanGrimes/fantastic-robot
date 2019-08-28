import { createAction, createAsyncAction } from 'typesafe-actions';
import { FetchStudiosInput, mockStudios, Filters } from './api';
import { StudiosState } from './reducer';

export const fetchStudiosAsync = createAsyncAction(
  '@@STUDIOS/FETCH_STUDIOS_REQUEST',
  '@@STUDIOS/FETCH_STUDIOS_SUCCESS',
  '@@STUDIOS/FETCH_STUDIOS_FAIL'
)<
  FetchStudiosInput &
    Partial<Pick<StudiosState['studios'], 'listUpdateType'>> & {
      isFiltering?: boolean;
    },
  ReturnType<typeof mockStudios>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  '@@STUDIOS/TOGGLE_FAVORITE_REQUEST',
  '@@STUDIOS/TOGGLE_FAVORITE_SUCCESS',
  '@@STUDIOS/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();

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

export const fetchFiltersAsync = createAsyncAction(
  '@@STUDIOS/FETCH_FILTERS_REQUEST',
  '@@STUDIOS/FETCH_FILTERS_SUCCESS',
  '@@STUDIOS/FETCH_FILTERS_FAIL'
)<undefined, Filters, any>();

export const clearFilters = createAction('@@STUDIOS/CLEAR_FILTERS');
