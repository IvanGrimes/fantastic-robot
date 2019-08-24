import { combineReducers } from 'redux';
import { studiosReducer } from '../features/studios/model/reducer';
import { loadingReducer } from './api/loading/reducer';
import { errorsReducer } from './api/errors/reducer';

export const rootReducer = combineReducers({
  studios: studiosReducer,
  api: combineReducers({
    loading: loadingReducer,
    errors: errorsReducer,
  }),
});
