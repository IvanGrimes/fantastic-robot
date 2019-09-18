import { Epic } from 'redux-observable';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';
import { getFilters } from '../../studioFilters/model/selectors';

export const fetchStudiosFlow: Epic<
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
      studioListActions: { fetchStudiosAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchStudiosAsync.request)),
    switchMap(({ payload }) =>
      from(fetchStudios(payload)).pipe(
        map(fetchStudiosAsync.success),
        catchError(error => of(fetchStudiosAsync.failure(error)))
      )
    )
  );

export const fetchFilterStudiosFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  state$,
  {
    api: { fetchFilterStudios },
    actions: {
      studioListActions: { fetchFilterStudiosAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchFilterStudiosAsync.request)),
    switchMap(({ payload }) => {
      const filters = getFilters(state$.value);

      return from(fetchFilterStudios({ ...payload, ...filters })).pipe(
        map(fetchFilterStudiosAsync.success),
        catchError(error => of(fetchFilterStudiosAsync.failure(error)))
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

export const studioListEpic = [
  fetchStudiosFlow,
  fetchFilterStudiosFlow,
  addFavoriteFlow,
];
