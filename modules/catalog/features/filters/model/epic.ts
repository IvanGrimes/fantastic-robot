import { combineEpics } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, ignoreElements, map, tap } from 'rxjs/operators';
import { mergeDeepRight } from 'ramda';
import { clear, parse, update } from './actions';
import { parseFiltersQueryString, updateFiltersQueryString } from '../utils';

const updateFlow: RootEpic = ($action) =>
  $action.pipe(
    filter(isActionOf(update)),
    tap(({ payload }) => {
      updateFiltersQueryString(
        mergeDeepRight(parseFiltersQueryString(), payload)
      );
    }),
    ignoreElements()
  );

const syncFlow: RootEpic = ($action) =>
  $action.pipe(
    filter(isActionOf(parse)),
    map(() => update(parseFiltersQueryString()))
  );

const clearFlow: RootEpic = ($action) =>
  $action.pipe(
    filter(isActionOf(clear)),
    tap(() => updateFiltersQueryString({})),
    ignoreElements()
  );

export const epic = combineEpics(updateFlow, syncFlow, clearFlow);
