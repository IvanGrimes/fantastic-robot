import { createAsyncAction } from 'typesafe-actions';
import { CityType } from '@modules/studio';
import { ConfigObject } from './types';
import { MetroListResponse } from './services';

export const fetchMetroListAsync = createAsyncAction(
  '@@studioData/FETCH_METRO_LIST_REQUEST',
  '@@studioData/FETCH_METRO_LIST_SUCCESS',
  '@@studioData/FETCH_METRO_LIST_FAIL'
)<{ city: CityType }, { list: MetroListResponse }, any>();

export const fetchConfigAsync = createAsyncAction(
  '@@studioData/FETCH_CONFIG_REQUEST',
  '@@studioData/FETCH_CONFIG_SUCCESS',
  '@@studioData/FETCH_CONFIG_FAIL'
)<undefined, { config: ConfigObject }, any>();
