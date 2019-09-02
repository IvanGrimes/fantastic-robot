import { Epic } from 'redux-observable';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';
import { getAppliedFilters } from '../../studioFilters/model/selectors';

export const fetchStudiosFlow: Epic<
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
      studioListActions: { fetchStudiosAsync },
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

export const addFavoriteFlow: Epic<
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
      studioListActions: { toggleFavoriteAsync },
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

export const studioListEpic = [fetchStudiosFlow, addFavoriteFlow];
