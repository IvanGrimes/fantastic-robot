import { parse } from 'qs';

export const paramsParse = (params: any) => parse(params, { allowDots: true });
