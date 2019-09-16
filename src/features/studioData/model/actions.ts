import { createAsyncAction } from 'typesafe-actions';
import { MetroListResponse } from './types';
import { CityType } from '../../../model/types';

export const fetchMetroListAsync = createAsyncAction(
  '@@studioData/FETCH_METRO_LIST_REQUEST',
  '@@studioData/FETCH_METRO_LIST_SUCCESS',
  '@@studioData/FETCH_METRO_LIST_FAIL'
)<{ city: CityType }, { list: MetroListResponse }, any>();
