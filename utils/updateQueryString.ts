import Router from 'next/router';

export const updateQueryString = (query: {}) => {
  Router.push({
    pathname: Router.pathname,
    query: {
      ...query,
    },
  });
};
