import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';
import { RootState } from '@model/types';

const getFiltersState = (state: RootState) => state.studio.filters;

export const getFilters = createDeepEqualSelector(
  [getFiltersState],
  state => state
);
export const getHasFilters = createDeepEqualSelector([getFilters], filters =>
  Boolean(
    filters.name ||
      filters.stations.length ||
      filters.priceTypes.length ||
      filters.equipments.length ||
      filters.interiors.length ||
      filters.bottomRight ||
      filters.topLeft
  )
);
