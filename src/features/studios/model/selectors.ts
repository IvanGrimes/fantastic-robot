import { getType } from 'typesafe-actions';
import { RootState } from '../../../model/types';
import { createRequestLoadingSelector } from '../../../model/api/loading/selectors';
import { fetchStudiosAsync, toggleFavoriteAsync } from './actions';
import { createRequestErrorSelector } from '../../../model/api/errors/selectors';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';

export const getStudiosLoading = createRequestLoadingSelector([
  getType(fetchStudiosAsync.request),
]);

export const getStudiosError = createRequestErrorSelector(
  getType(fetchStudiosAsync.request)
);

const getStudiosState = (state: RootState) => state.studios;

export const getStudios = createDeepEqualSelector(
  [getStudiosState],
  state => state.studios
);

export const getToggleFavoriteError = createRequestErrorSelector(
  getType(toggleFavoriteAsync.request)
);

const getFiltersState = createDeepEqualSelector(
  [getStudiosState],
  state => state.filters
);

export const getFiltersData = createDeepEqualSelector(
  [getFiltersState],
  state => state.data
);

export const getAppliedFilters = createDeepEqualSelector(
  [getFiltersState],
  state => state.applied
);

export const getHasAppliedFilters = createDeepEqualSelector(
  [getAppliedFilters],
  filters =>
    Boolean(
      typeof filters.favorite !== 'undefined' ||
        (filters.priceSegments && filters.priceSegments.length) ||
        (filters.stationIds && filters.stationIds.length) ||
        (filters.typeIds && filters.typeIds.length)
    )
);

export const getFilters = createDeepEqualSelector(
  [getFiltersState],
  state => state.data
);

export const getIsStudiosFiltering = createDeepEqualSelector(
  [getStudios],
  state => state.isFiltering
);
