import { RootState } from '../../../model/types';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';
import { getStudios } from '../../studioList/model/selectors';

const getStudiosState = (state: RootState) => state.studios;

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

export const getStudioMap = createDeepEqualSelector(
  [getStudiosState],
  state => state.map
);

export const getStudioMapPreview = createDeepEqualSelector(
  [getStudioMap],
  state => state.preview
);
