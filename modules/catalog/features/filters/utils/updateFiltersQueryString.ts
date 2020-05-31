import { updateQueryString } from '@utils';
import { FiltersType } from '../internal';

export const updateFiltersQueryString = (filters: FiltersType) =>
  updateQueryString({ filters: JSON.stringify(filters) });
