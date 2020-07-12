import { parse } from 'qs';

export const parseQueryString = () =>
  typeof window !== 'undefined'
    ? parse(window.location.search.replace('?', ''))
    : {};
