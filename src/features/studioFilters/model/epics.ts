import { Epic } from 'redux-observable';
import {
  catchError,
  debounceTime,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';
import { getAppliedFilters, getHasAppliedFilters } from './selectors';

export const fetchFiltersFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  _state$,
  {
    api: { fetchFilters },
    actions: {
      studioFiltersActions: { fetchFiltersAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchFiltersAsync.request)),
    switchMap(() =>
      fetchFilters().pipe(
        map(fetchFiltersAsync.success),
        catchError(error => of(fetchFiltersAsync.failure(error)))
      )
    )
  );

export const setFiltersFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  state$,
  {
    actions: {
      studioFiltersActions: { setFilters },
      studioListActions: { fetchStudiosAsync },
    },
  }
) => {
  const hasAppliedFilters = getHasAppliedFilters(state$.value);

  return action$.pipe(
    filter(isActionOf(setFilters)),
    debounceTime(500),
    map(() => {
      const filters = getAppliedFilters(state$.value);

      return fetchStudiosAsync.request({
        ...filters,
        priceSegments: filters.priceSegments,
        listUpdateType: hasAppliedFilters ? 'merge' : 'replace',
        isFiltering: true,
      });
    })
  );
};

export const studioFiltersEpic = [fetchFiltersFlow, setFiltersFlow];
