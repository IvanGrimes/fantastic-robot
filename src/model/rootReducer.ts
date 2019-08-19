import { combineReducers } from 'redux';
import { studiosReducer } from './studios/reducer';
import { loadingReducer } from './api/loading/reducer';
import { errorsReducer } from './api/errors/reducer';

export const rootReducer = combineReducers({
  studios: studiosReducer,
  api: combineReducers({
    loading: loadingReducer,
    errors: errorsReducer,
  }),
});
