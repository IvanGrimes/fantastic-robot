import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';
import { RootState } from '../../../model/types';

const getFiltersState = (state: RootState) => state.studioFilters;

export const getFilters = createDeepEqualSelector(
  [getFiltersState],
  state => state
);
export const getHasFilters = createDeepEqualSelector([getFilters], filters =>
  Boolean(
    filters.name ||
      filters.stations.length ||
      filters.priceSegments.length ||
      filters.equipments.length ||
      filters.interiors.length ||
      filters.bottomRight ||
      filters.topLeft
  )
);
