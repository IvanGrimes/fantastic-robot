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
  'studio/list/FETCH_STUDIOS_REQUEST',
  'studio/list/FETCH_STUDIOS_SUCCESS',
  'studio/list/FETCH_STUDIOS_FAIL',
  'studio/list/FETCH_STUDIOS_CANCEL'
)<StudiosInput, Await<ReturnType<typeof fetchStudios>>, any, undefined>();

export const fetchFilterStudiosAsync = createAsyncAction(
  'studio/list/FETCH_FILTER_STUDIOS_REQUEST',
  'studio/list/FETCH_FILTER_STUDIOS_SUCCESS',
  'studio/list/FETCH_FILTER_STUDIOS_FAIL'
)<
  Pick<FilterStudiosInput, 'city'> &
    Pick<FilterStudiosInput, 'page'> &
    Pick<ListState, 'updateStrategy'>,
  Await<ReturnType<typeof fetchFilterStudios>>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  'studio/list/TOGGLE_FAVORITE_REQUEST',
  'studio/list/TOGGLE_FAVORITE_SUCCESS',
  'studio/list/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();
