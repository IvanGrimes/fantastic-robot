import { parse } from 'qs';
import { FiltersType } from '../internal';

export const parseFiltersQueryString = (
  location: Location
): DeepPartial<FiltersType> => {
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
