import { updateQueryString } from '@utils';
import { FiltersState } from '../model';

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

export const updateFiltersQueryString = (
  filters: DeepPartial<FiltersState>
) => {
  const f = filterObject(filters);

  return updateQueryString(
    Object.keys(f).length ? { filters: JSON.stringify(f) } : {}
  );
};
