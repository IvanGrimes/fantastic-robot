import { getType } from 'typesafe-actions';
import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';
import { createRequestErrorSelector } from '@model/api/errors/selectors';
import { createRequestLoadingSelector } from '@model/api/loading/selectors';
import { RootState } from '@model/types';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';

const getStudiosState = (state: RootState) => state.studio.list;

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

export const getHasNext = (state: RootState) => getStudiosState(state).hasNext;

export const getFilterStudiosLoading = createRequestLoadingSelector([
  getType(fetchFilterStudiosAsync.request),
]);
