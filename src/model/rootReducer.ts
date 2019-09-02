import { combineReducers } from 'redux';
import { loadingReducer } from './api/loading/reducer';
import { errorsReducer } from './api/errors/reducer';
import { studioListReducer } from '../features/studioList/model/reducer';
import { studioFiltersReducer } from '../features/studioFilters/model/reducer';
import { studioMapListReducer } from '../features/studioMapList/model/reducer';
import { uiReducer } from '../features/ui/model/reducer';

export const rootReducer = combineReducers({
  api: combineReducers({
    loading: loadingReducer,
    errors: errorsReducer,
  }),
  studioList: studioListReducer,
  studioFilters: studioFiltersReducer,
  studioMapList: studioMapListReducer,
  ui: uiReducer,
});
