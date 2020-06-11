import { combineEpics } from 'redux-observable';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { fetchStudioListAsync } from './actions';
import { fetchStudioList } from './services';

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

export const epic = combineEpics(fetchStudioListFlow);
