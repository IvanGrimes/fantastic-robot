import { createAsyncAction } from 'typesafe-actions';
import { ShortStudio } from './types';

export const fetchStudiosAsync = createAsyncAction(
  '@@DATA/FETCH_STUDIOS_REQUEST',
  '@@DATA/FETCH_STUDIOS_SUCCESS',
  '@@DATA/FETCH_STUDIOS_FAIL'
)<undefined, ShortStudio[], any>();

export default <const>{
  fetchStudiosAsync,
};
