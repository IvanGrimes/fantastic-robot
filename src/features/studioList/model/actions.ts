import { createAsyncAction } from 'typesafe-actions';
import { StudiosInput } from '../../../controllers/studio/list';
import { fetchFilterStudios, fetchStudios } from './api';
import { Await } from '../../../utils/Await';
import { FilterStudiosInput } from '../../../controllers/studio/filter';

export const fetchStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_STUDIOS_REQUEST',
  '@@studioList/FETCH_STUDIOS_SUCCESS',
  '@@studioList/FETCH_STUDIOS_FAIL'
)<StudiosInput, Await<ReturnType<typeof fetchStudios>>, any>();

export const fetchFilterStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_STUDIOS_REQUEST',
  '@@studioList/FETCH_STUDIOS_SUCCESS',
  '@@studioList/FETCH_STUDIOS_FAIL'
)<
  Pick<FilterStudiosInput, 'city'> & Pick<FilterStudiosInput, 'page'>,
  Await<ReturnType<typeof fetchFilterStudios>>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  '@@studioList/TOGGLE_FAVORITE_REQUEST',
  '@@studioList/TOGGLE_FAVORITE_SUCCESS',
  '@@studioList/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();
