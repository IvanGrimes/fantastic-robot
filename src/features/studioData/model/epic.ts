import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { catchError, filter, switchMap, map } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';

const fetchMetroListFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  _state$,
  {
    api: { fetchMetroList },
    actions: {
      studioDataActions: { fetchMetroListAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchMetroListAsync.request)),
    switchMap(({ payload }) =>
      from(fetchMetroList({ city: payload.city })).pipe(
        map(data => fetchMetroListAsync.success({ list: data })),
        catchError(error => of(fetchMetroListAsync.failure(error)))
      )
    )
  );

const fetchConfigFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  _state$,
  {
    api: { fetchConfig },
    actions: {
      studioDataActions: { fetchConfigAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(fetchConfigAsync.request)),
    switchMap(() =>
      from(fetchConfig()).pipe(
        map(data => fetchConfigAsync.success({ config: data })),
        catchError(error => of(fetchConfigAsync.failure(error)))
      )
    )
  );

export const studioDataEpic = [fetchMetroListFlow, fetchConfigFlow];
