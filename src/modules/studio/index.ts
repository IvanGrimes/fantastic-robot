import { combineReducers } from 'redux';
import * as listMap from './features/list-map';
import * as data from './features/data';
import * as details from './features/details';
import * as filters from './features/filters';
import * as list from './features/list';
import * as pages from './pages';

export * from './model/types';

const reducer = combineReducers({
  data: data.reducer,
  details: details.reducer,
  filters: filters.reducer,
  list: list.reducer,
  listMap: listMap.reducer,
});

const saga = [...data.saga, ...details.saga, ...filters.saga, ...list.saga];

const rootAction = {
  filters: filters.actions,
  listMap: listMap.actions,
  data: data.actions,
  details: details.actions,
  list: list.actions,
};

export {
  reducer,
  saga,
  pages,
  rootAction,
  data,
  details,
  filters,
  list,
  listMap,
};
