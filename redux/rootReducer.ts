import { combineReducers } from 'redux';
import { dataReducer } from './data/reducer';
import { loadingReducer } from './api/loading/reducer';
import { errorsReducer } from './api/errors/reducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  api: combineReducers({
    loading: loadingReducer,
    errors: errorsReducer,
  }),
});
