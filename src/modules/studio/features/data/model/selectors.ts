import { getType } from 'typesafe-actions';
import { createRequestLoadingSelector } from '@model/api/loading/selectors';
import { RootState } from '@model/types';
import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';
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
  const hasConfig =
    config.context.length && config.equipment.length && config.interior.length;

  return (
    createRequestLoadingSelector([getType(fetchConfigAsync.request)]) &&
    !hasConfig
  );
};
