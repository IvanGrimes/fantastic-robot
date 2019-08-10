import { Epic } from 'redux-observable';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { EpicDependencies, RootAction, RootState } from '../types';
import { getFilters, getHasAppliedFilters } from "./selectors";

const fetchStudiosFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  _state$,
  {
    api: { fetchStudios },
    actions: {
      dataActions: { fetchStudiosAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchStudiosAsync.request)),
    switchMap(({ payload }) =>
      fetchStudios(payload).pipe(
        map(fetchStudiosAsync.success),
        catchError(error => of(fetchStudiosAsync.failure(error)))
      )
    )
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
  const filters = getFilters(state$.value);
  const hasAppliedFilters = getHasAppliedFilters(state$.value);

  return action$.pipe(
    filter(isActionOf(setFilters)),
    map(({ payload }) =>
      fetchStudiosAsync.request({
        ...filters,
        ...payload,
        listUpdateType: hasAppliedFilters ? 'merge' : 'replace',
      })
    )
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

export const studiosEpic = [fetchStudiosFlow, addFavoriteFlow, setFiltersFlow];
