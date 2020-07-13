import Router from 'next/router';
import { parse, stringify } from 'qs';
import { equals, mergeDeepRight } from 'ramda';

export const updateQueryString = (_query: {}) => {
  const [asPath, search] = Router.asPath.split('?');
  const parsedSearch = parse(search);
  const nextQueries = stringify(mergeDeepRight(parsedSearch, _query));
  const withoutFiltersOrNewFilters =
    (!search && Object.keys(_query).length) || !equals(parsedSearch, _query);

  if (withoutFiltersOrNewFilters) {
    Router.push('/', `/?${nextQueries}`);
  } else if (Object.keys(_query).length) {
    Router.push(Router.route, `${asPath}?${nextQueries}`);
  } else {
    Router.push(Router.route, asPath);
  }
};
