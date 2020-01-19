import { getType } from 'typesafe-actions';
import * as services from '@modules/services';
import { RootState } from '@model/types';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';

const getStudiosState = (state: RootState) => state.studio.list;

export const getStudiosLoading = services.createRequestLoadingSelector([
  getType(fetchStudiosAsync.request),
]);

export const getStudiosError = services.createRequestErrorSelector(
  getType(fetchStudiosAsync.request)
);

export const getStudios = services.createDeepEqualSelector(
  [getStudiosState],
  state => state.studios
);

export const getHasNext = (state: RootState) => getStudiosState(state).hasNext;

export const getFilterStudiosLoading = services.createRequestLoadingSelector([
  getType(fetchFilterStudiosAsync.request),
]);
