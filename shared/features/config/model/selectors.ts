import { selectors as loadingSelectors } from '../../loading';
import {selectors as errorsSelectors} from '../../errors'
import { fetchConfigAsync, fetchMetroListAsync } from './actions';

const getState = (state: RootState) => state.shared.config;

export const getMetroListError = errorsSelectors.getRequestError(fetchMetroListAsync.request)

export const getMetroListLoading = loadingSelectors.getRequestLoading(
  fetchMetroListAsync.request
);

export const getMetroList = (state: RootState) => getState(state).metroList;

export const getConfigError = errorsSelectors.getRequestError(fetchConfigAsync.request)

export const getConfigLoading = loadingSelectors.getRequestLoading(
  fetchConfigAsync.request
);

export const getConfig = (state: RootState) => getState(state).config;
