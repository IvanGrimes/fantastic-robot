import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import * as list from './features/list';
import * as filters from './features/filters';

export const actions = { ...list.actions, ...filters.actions };
export const reducer = combineReducers({
  list: list.reducer,
  filters: filters.reducer,
});
export const epic = combineEpics(list.epic, filters.epic);
export const selectors = { ...list.selectors };

export { Catalog } from './components';
