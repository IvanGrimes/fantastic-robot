import { selectors } from '../../loading';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

const getState = (state: RootState) => state.shared.config;

export const getMetroListLoading = selectors.getRequestLoading(
  fetchMetroListAsync.request
);

export const getMetroList = (state: RootState) => getState(state).metroList;

export const getConfigLoading = selectors.getRequestLoading(
  fetchConfigAsync.request
);

export const getConfig = (state: RootState) => getState(state).config;
