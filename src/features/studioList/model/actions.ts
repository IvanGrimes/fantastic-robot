import { createAsyncAction } from 'typesafe-actions';
import { FetchStudiosInput, mockStudios } from '../../../mocks/mockStudios';
import { StudioListState } from './reducer';

export const fetchStudiosAsync = createAsyncAction(
  '@@studioList/FETCH_STUDIOS_REQUEST',
  '@@studioList/FETCH_STUDIOS_SUCCESS',
  '@@studioList/FETCH_STUDIOS_FAIL'
)<
  FetchStudiosInput &
    Partial<Pick<StudioListState, 'listUpdateType'>> & {
      isFiltering?: boolean;
    },
  ReturnType<typeof mockStudios>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  '@@studioList/TOGGLE_FAVORITE_REQUEST',
  '@@studioList/TOGGLE_FAVORITE_SUCCESS',
  '@@studioList/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();
