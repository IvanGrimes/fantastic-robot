import { createAsyncAction } from 'typesafe-actions';
import { FetchStudiosInput, mockStudios } from '../../studios/model/api';
import { StudiosState } from '../../studios/model/reducer';

export const fetchStudiosAsync = createAsyncAction(
  '@@STUDIOS/FETCH_STUDIOS_REQUEST',
  '@@STUDIOS/FETCH_STUDIOS_SUCCESS',
  '@@STUDIOS/FETCH_STUDIOS_FAIL'
)<
  FetchStudiosInput &
    Partial<Pick<StudiosState['studios'], 'listUpdateType'>> & {
      isFiltering?: boolean;
    },
  ReturnType<typeof mockStudios>,
  any
>();

export const toggleFavoriteAsync = createAsyncAction(
  '@@STUDIOS/TOGGLE_FAVORITE_REQUEST',
  '@@STUDIOS/TOGGLE_FAVORITE_SUCCESS',
  '@@STUDIOS/TOGGLE_FAVORITE_FAIL'
)<string, string, { id: string; error: any }, { id: string }>();
