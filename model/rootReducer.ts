import { combineReducers } from 'redux';
import * as shared from '@shared';
import * as catalog from '@modules/catalog';

export const rootReducer = combineReducers({
  shared: shared.reducer,
  catalog: catalog.reducer,
});
