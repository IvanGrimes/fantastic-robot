import { FiltersType } from '../internal';
import { updateQueryString } from '../../../utils';

export const updateFiltersQueryString = (filters: FiltersType) =>
  updateQueryString({ filters: JSON.stringify(filters) });
