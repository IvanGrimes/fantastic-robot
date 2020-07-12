import Router from 'next/router';
import { parse, stringify } from 'qs';
import { mergeDeepRight } from 'ramda';

export const updateQueryString = (_query: {}) => {
  const [asPath, search] = Router.asPath.split('?');

  if (Object.keys(_query).length) {
    Router.push(
      Router.route,
      `${asPath}?${stringify(mergeDeepRight(parse(search), _query))}`
    );
  } else {
    Router.push(Router.route, asPath);
  }
};
