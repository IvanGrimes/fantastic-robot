import { updateQueryString } from '@utils';
import { FiltersType } from '../internal';

const filterObject = <T extends object>(target: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(target)
      .filter(([, v]) => {
        if (typeof v === 'string') {
          return Boolean(v.length);
        }
        if (typeof v === 'object') {
          if (Array.isArray(v)) {
            return Boolean(v.length);
          }

          return Object.keys(filterObject(v)).length;
        }

        return Boolean(v);
      })
      .map(([k, v]) => [k, typeof v === 'object' ? filterObject(v) : v])
  );
};

export const updateFiltersQueryString = (filters: DeepPartial<FiltersType>) => {
  const f = filterObject(filters);

  return updateQueryString(
    Object.keys(f).length ? { filters: JSON.stringify(f) } : {}
  );
};
