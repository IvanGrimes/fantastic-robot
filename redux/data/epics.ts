import { Epic } from 'redux-observable';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { EpicDependencies, RootAction, RootState } from '../types';

export const fetchStudiosFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (action$, _state$, { api: { fetchStudios }, action: { fetchStudiosAsync } }) =>
  action$.pipe(
    filter(isActionOf(fetchStudiosAsync.request)),
    switchMap(() =>
      fetchStudios().pipe(
        map(fetchStudiosAsync.success),
        catchError(error => of(fetchStudiosAsync.failure(error)))
      )
    )
  );
