import { getType } from 'typesafe-actions';
import { RootState } from '../types';
import { createRequestLoadingSelector } from '../api/loading/selectors';
import { fetchStudiosAsync, toggleFavoriteAsync } from './actions';
import { createRequestErrorSelector } from '../api/errors/selectors';
import { createDeepEqualSelector } from '../../lib/createDeepEqualSelector';

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

export const getFilters = createDeepEqualSelector(
  [getStudios],
  state => state.filters
);

export const getHasAppliedFilters = createDeepEqualSelector(
  [getFilters],
  filters =>
    Boolean(
      filters.roomsCount.from ||
        filters.roomsCount.to ||
        typeof filters.favorite !== 'undefined' ||
        (filters.priceSegment && filters.priceSegment.length) ||
        (filters.stationIds && filters.stationIds.length) ||
        (filters.typeIds && filters.typeIds.length)
    )
);
