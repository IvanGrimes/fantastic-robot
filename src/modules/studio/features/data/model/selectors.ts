import { getType } from 'typesafe-actions';
import { RootState } from '@model/types';
import * as services from '@modules/services';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

const getState = (state: RootState) => state.studio.data;

export const getMetroList = services.createDeepEqualSelector(
  [getState],
  state => state.metroList
);

export const getMetroListLoading = (state: RootState) =>
  services.createRequestLoadingSelector([getType(fetchMetroListAsync.request)]) &&
  !getMetroList(state).length;

export const getConfig = services.createDeepEqualSelector(
  [getState],
  state => state.config
);

export const getConfigLoading = (state: RootState) => {
  const config = getConfig(state);
  const hasConfig = config.equipment.length && config.interior.length;

  return (
    services.createRequestLoadingSelector([getType(fetchConfigAsync.request)]) &&
    !hasConfig
  );
};
