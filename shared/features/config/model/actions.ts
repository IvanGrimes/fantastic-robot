import { createAsyncAction } from 'typesafe-actions';
import { Config, MetroList } from './services';
import { ServiceError } from '../../../model';

export const fetchMetroListAsync = createAsyncAction(
  'SHARED/FETCH_METRO_LIST_REQUEST',
  'SHARED/FETCH_METRO_LIST_SUCCESS',
  'SHARED/FETCH_METRO_LIST_FAIL'
)<undefined, MetroList, ServiceError>();

export const fetchConfigAsync = createAsyncAction(
  'SHARED/FETCH_CONFIG_REQUEST',
  'SHARED/FETCH_CONFIG_SUCCESS',
  'SHARED/FETCH_CONFIG_FAIL'
)<undefined, Config, ServiceError>();
