import { RootState } from '../types';
import { createRequestLoadingSelector } from '../api/loading/selectors';
import { getType } from 'typesafe-actions';
import { fetchStudiosAsync } from './actions';
import { createRequestErrorSelector } from '../api/errors/selectors';

export const getStudiosLoading = createRequestLoadingSelector([
  getType(fetchStudiosAsync.request),
]);

export const getStudiosError = createRequestErrorSelector(
  getType(fetchStudiosAsync.request)
);

export const getStudios = (state: RootState) => state.data.studios;
