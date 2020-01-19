import { getType } from 'typesafe-actions';
import { createDeepEqualSelector } from '@modules/services/utils/createDeepEqualSelector';
import { RootState } from '@model/types';
import {
  createRequestErrorSelector,
  createRequestLoadingSelector,
} from '@modules/services';
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
