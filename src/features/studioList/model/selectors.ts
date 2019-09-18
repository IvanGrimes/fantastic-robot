import { getType } from 'typesafe-actions';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';
import { createRequestErrorSelector } from '../../../model/api/errors/selectors';
import { fetchStudiosAsync, toggleFavoriteAsync } from './actions';
import { createRequestLoadingSelector } from '../../../model/api/loading/selectors';
import { RootState } from '../../../model/types';

const getStudiosState = (state: RootState) => state.studioList;

export const getStudiosLoading = createRequestLoadingSelector([
  getType(fetchStudiosAsync.request),
]);
export const getStudiosError = createRequestErrorSelector(
  getType(fetchStudiosAsync.request)
);
export const getStudios = createDeepEqualSelector(
  [getStudiosState],
  state => state.studios
);
export const getToggleFavoriteError = createRequestErrorSelector(
  getType(toggleFavoriteAsync.request)
);
