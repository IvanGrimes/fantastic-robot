import { combineReducers } from 'redux';
import { studiosReducer } from '../features/studios/model/reducer';
import { loadingReducer } from './api/loading/reducer';
import { errorsReducer } from './api/errors/reducer';
import { uiReducer } from '../features/ui/model/reducer';
import { studioListReducer } from '../features/studioList/model/reducer';

export const rootReducer = combineReducers({
  api: combineReducers({
    loading: loadingReducer,
    errors: errorsReducer,
  }),
  studios: studiosReducer,
  ui: uiReducer,
  studioList: studioListReducer,
});
