import { combineEpics } from 'redux-observable';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';
import { fetchConfig, fetchMetroList } from './services';

const fetchMetroListFlow: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchMetroListAsync.request)),
    exhaustMap(() =>
      from(fetchMetroList()).pipe(
        map(fetchMetroListAsync.success),
        catchError((error) => of(fetchMetroListAsync.failure(error)))
      )
    )
  );

const fetchConfigFlow: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchConfigAsync.request)),
    exhaustMap(() =>
      from(fetchConfig()).pipe(
        map(fetchConfigAsync.success),
        catchError((error) => of(fetchConfigAsync.failure(error)))
      )
    )
  );

export const epic = combineEpics(fetchMetroListFlow, fetchConfigFlow);
