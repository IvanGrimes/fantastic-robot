import { createAsyncAction } from 'typesafe-actions';
import { Await } from '../../../utils/Await';
import { StudioListState } from './reducer';
import {
  fetchFilterStudios,
  fetchStudios,
  FilterStudiosInput,
  StudiosInput,
} from './services';

export const fetchStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_STUDIOS_REQUEST',
  '@@studioList/FETCH_STUDIOS_SUCCESS',
  '@@studioList/FETCH_STUDIOS_FAIL'
)<StudiosInput, Await<ReturnType<typeof fetchStudios>>, any>();

export const fetchFilterStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_FILTER_STUDIOS_REQUEST',
  '@@studioList/FETCH_FILTER_STUDIOS_SUCCESS',
  '@@studioList/FETCH_FILTER_STUDIOS_FAIL'
)<
  Pick<FilterStudiosInput, 'city'> &
    Pick<FilterStudiosInput, 'page'> &
    Pick<StudioListState, 'updateStrategy'>,
  Await<ReturnType<typeof fetchFilterStudios>>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  '@@studioList/TOGGLE_FAVORITE_REQUEST',
  '@@studioList/TOGGLE_FAVORITE_SUCCESS',
  '@@studioList/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();
