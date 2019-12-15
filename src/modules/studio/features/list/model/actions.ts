import { createAsyncAction } from 'typesafe-actions';
import { Await } from '@utils/Await';
import { ListState } from './reducer';
import {
  fetchFilterStudios,
  fetchStudios,
  FilterStudiosInput,
  StudiosInput,
} from './services';

export const fetchStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_STUDIOS_REQUEST',
  '@@studioList/FETCH_STUDIOS_SUCCESS',
  '@@studioList/FETCH_STUDIOS_FAIL',
  '@@studioList/FETCH_STUDIOS_CANCEL'
)<StudiosInput, Await<ReturnType<typeof fetchStudios>>, any, undefined>();

export const fetchFilterStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_FILTER_STUDIOS_REQUEST',
  '@@studioList/FETCH_FILTER_STUDIOS_SUCCESS',
  '@@studioList/FETCH_FILTER_STUDIOS_FAIL'
)<
  Pick<FilterStudiosInput, 'city'> &
    Pick<FilterStudiosInput, 'page'> &
    Pick<ListState, 'updateStrategy'>,
  Await<ReturnType<typeof fetchFilterStudios>>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  '@@studioList/TOGGLE_FAVORITE_REQUEST',
  '@@studioList/TOGGLE_FAVORITE_SUCCESS',
  '@@studioList/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();
