import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, ignoreElements, map, tap } from 'rxjs/operators';
import { mergeDeepRight } from 'ramda';
import { parse, update } from './actions';
import { parseFiltersQueryString, updateFiltersQueryString } from '../utils';

const updateFiltersFlow: RootEpic = ($action) =>
  $action.pipe(
    filter(isActionOf(update)),
    tap(({ payload }) => {
      updateFiltersQueryString(
        mergeDeepRight(parseFiltersQueryString(window.location), payload)
      );
    }),
    ignoreElements()
  );

const syncFiltersFlow: RootEpic = ($action) =>
  $action.pipe(
    filter(isActionOf(parse)),
    map(() => update(parseFiltersQueryString(window.location)))
  );

export const epic = combineEpics(updateFiltersFlow, syncFiltersFlow);
