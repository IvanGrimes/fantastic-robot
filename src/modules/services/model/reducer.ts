import { combineReducers } from 'redux';
import { loadingReducer } from './reducers/loading';
import { errorsReducer } from './reducers/errors';

export const reducer = combineReducers({
  loading: loadingReducer,
  errors: errorsReducer,
});
