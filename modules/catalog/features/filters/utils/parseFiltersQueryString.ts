import { parse } from 'qs';
import { FiltersState } from '../model';

export const parseFiltersQueryString = (
  location: Location
): DeepPartial<FiltersState> => {
  const { filters } = parse(location.search.replace('?', ''));

  if (filters) {
    try {
      return JSON.parse(filters as string);
    } catch (e) {
      return {};
    }
  }

  return {};
};
