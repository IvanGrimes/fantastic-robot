import { Epic } from 'redux-observable';
import {
  filter,
  switchMap,
  map,
  catchError,
  debounceTime,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';
import { getAppliedFilters, getHasAppliedFilters } from './selectors';

const fetchStudiosFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  state$,
  {
    api: { fetchStudios },
    actions: {
      dataActions: { fetchStudiosAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchStudiosAsync.request)),
    switchMap(({ payload }) => {
      const appliedFilters = getAppliedFilters(state$.value);

      return fetchStudios({ ...appliedFilters, ...payload }).pipe(
        map(fetchStudiosAsync.success),
        catchError(error => of(fetchStudiosAsync.failure(error)))
      );
    })
  );

const setFiltersFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  state$,
  {
    actions: {
      dataActions: { setFilters, fetchStudiosAsync },
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

const addFavoriteFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  _state$,
  {
    api: { toggleFavorite },
    actions: {
      dataActions: { toggleFavoriteAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(toggleFavoriteAsync.request)),
    switchMap(({ payload }) =>
      toggleFavorite(payload).pipe(
        map(({ id }) => toggleFavoriteAsync.success(id)),
        catchError(error =>
          of(toggleFavoriteAsync.failure({ id: payload, error: error.message }))
        )
      )
    )
  );

const fetchFiltersFlow: Epic<
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
      dataActions: { fetchFiltersAsync },
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

export const studiosEpic = [
  fetchStudiosFlow,
  addFavoriteFlow,
  setFiltersFlow,
  fetchFiltersFlow,
];
