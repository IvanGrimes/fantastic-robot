import { createAsyncAction } from 'typesafe-actions';
import { ShortStudio } from './types';
import { FetchStudiosInput } from './api';

export const fetchStudiosAsync = createAsyncAction(
  '@@DATA/FETCH_STUDIOS_REQUEST',
  '@@DATA/FETCH_STUDIOS_SUCCESS',
  '@@DATA/FETCH_STUDIOS_FAIL'
)<FetchStudiosInput, ShortStudio[], any>();
