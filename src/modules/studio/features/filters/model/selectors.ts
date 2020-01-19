import * as services from '@modules/services';
import { RootState } from '@model/types';

const getFiltersState = (state: RootState) => state.studio.filters;

export const getFilters = services.createDeepEqualSelector(
  [getFiltersState],
  state => state
);
export const getHasFilters = services.createDeepEqualSelector([getFilters], filters =>
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
