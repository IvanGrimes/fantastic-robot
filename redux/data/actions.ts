import { createAsyncAction } from 'typesafe-actions';
import { FetchStudiosInput, mockStudios } from './api';

export const fetchStudiosAsync = createAsyncAction(
  '@@DATA/FETCH_STUDIOS_REQUEST',
  '@@DATA/FETCH_STUDIOS_SUCCESS',
  '@@DATA/FETCH_STUDIOS_FAIL'
)<FetchStudiosInput, ReturnType<typeof mockStudios>, any>();
