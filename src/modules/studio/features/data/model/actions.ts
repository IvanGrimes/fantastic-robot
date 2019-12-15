import { createAsyncAction } from 'typesafe-actions';
import { CityType } from '@modules/studio';
import { ConfigObject } from './types';
import { MetroListResponse } from './services';

export const fetchMetroListAsync = createAsyncAction(
  'studio/data/FETCH_METRO_LIST_REQUEST',
  'studio/data/FETCH_METRO_LIST_SUCCESS',
  'studio/data/FETCH_METRO_LIST_FAIL'
)<{ city: CityType }, { list: MetroListResponse }, any>();

export const fetchConfigAsync = createAsyncAction(
  'studio/data/FETCH_CONFIG_REQUEST',
  'studio/data/FETCH_CONFIG_SUCCESS',
  'studio/data/FETCH_CONFIG_FAIL'
)<undefined, { config: ConfigObject }, any>();
