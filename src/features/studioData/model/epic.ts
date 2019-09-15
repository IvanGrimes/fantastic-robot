import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { catchError, filter, switchMap, map } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';

export const fetchMetroListFlow: Epic<
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

export const studioDataEpic = [fetchMetroListFlow];
