import { stringify } from 'qs';

export const paramsSerializer = (params: any) =>
  stringify(params, { arrayFormat: 'comma' });
