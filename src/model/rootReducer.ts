import { combineReducers } from 'redux';
import * as studio from '@modules/studio';
import * as ui from '@features/ui';
import { loadingReducer } from './api/loading/reducer';
import { errorsReducer } from './api/errors/reducer';

export const rootReducer = combineReducers({
  api: combineReducers({
    loading: loadingReducer,
    errors: errorsReducer,
  }),
  studio: studio.reducer,
  ui: ui.reducer,
});
