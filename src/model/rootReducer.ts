import { combineReducers } from 'redux';
import * as studio from '@modules/studio';
import * as ui from '@modules/ui';
import * as services from '@modules/services';

export const rootReducer = combineReducers({
  services: services.reducer,
  studio: studio.reducer,
  ui: ui.reducer,
});
