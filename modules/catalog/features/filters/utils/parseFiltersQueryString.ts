import { parseQueryString } from '@utils';
import { FiltersState } from '../model';

export const parseFiltersQueryString = (): DeepPartial<
  FiltersState['values']
> => {
  const { filters } = parseQueryString();

  if (filters) {
    try {
      return JSON.parse(filters as string);
    } catch (e) {
      return {};
    }
  }

  return {};
};
