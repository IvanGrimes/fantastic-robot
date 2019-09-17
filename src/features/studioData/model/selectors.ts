import { getType } from 'typesafe-actions';
import { createRequestLoadingSelector } from '../../../model/api/loading/selectors';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';
import { RootState } from '../../../model/types';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';

const getState = (state: RootState) => state.studioData;

export const getMetroListLoading = createRequestLoadingSelector([
  getType(fetchMetroListAsync.request),
]);

export const getMetroList = createDeepEqualSelector(
  [getState],
  state => state.metroList
);

export const getConfigLoading = createRequestLoadingSelector([
  getType(fetchConfigAsync.request),
]);

export const getConfig = createDeepEqualSelector(
  [getState],
  state => state.config
);
