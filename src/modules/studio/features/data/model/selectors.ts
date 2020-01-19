import { getType } from 'typesafe-actions';
import { RootState } from '@model/types';
import { createDeepEqualSelector } from '@modules/services/utils/createDeepEqualSelector';
import { createRequestLoadingSelector } from '@modules/services';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

const getState = (state: RootState) => state.studio.data;

export const getMetroList = createDeepEqualSelector(
  [getState],
  state => state.metroList
);

export const getMetroListLoading = (state: RootState) =>
  createRequestLoadingSelector([getType(fetchMetroListAsync.request)]) &&
  !getMetroList(state).length;

export const getConfig = createDeepEqualSelector(
  [getState],
  state => state.config
);

export const getConfigLoading = (state: RootState) => {
  const config = getConfig(state);
  const hasConfig = config.equipment.length && config.interior.length;

  return (
    createRequestLoadingSelector([getType(fetchConfigAsync.request)]) &&
    !hasConfig
  );
};
