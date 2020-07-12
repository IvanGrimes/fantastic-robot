import { combineEpics } from 'redux-observable';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { fetchStudioListAsync, fetchStudioNextListAsync } from './actions';
import { fetchStudioList, fetchStudioNextList } from './services';

const fetchStudioListFlow: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchStudioListAsync.request)),
    exhaustMap(() =>
      from(fetchStudioList()).pipe(
        map(fetchStudioListAsync.success),
        catchError((error) => of(fetchStudioListAsync.failure(error)))
      )
    )
  );

const fetchStudioNextListFlow: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchStudioNextListAsync.request)),
    exhaustMap(({ payload }) =>
      from(fetchStudioNextList(payload)).pipe(
        map(fetchStudioNextListAsync.success),
        catchError((error) => of(fetchStudioNextListAsync.failure(error)))
      )
    )
  );

export const epic = combineEpics(fetchStudioListFlow, fetchStudioNextListFlow);
