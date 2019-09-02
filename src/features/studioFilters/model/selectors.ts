import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';
import { RootState } from '../../../model/types';

const getFiltersState = (state: RootState) => state.studioFilters;

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
