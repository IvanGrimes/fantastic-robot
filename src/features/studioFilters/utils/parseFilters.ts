import { parse } from 'qs';

export const parseFilters = (asPath: string) => {
  const { filters } = parse(asPath.split('?')[1]);

  return filters ? JSON.parse(filters) : {};
};
