import { combineEpics } from 'redux-observable';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { fetchStudioListAsync, fetchRoomListAsync } from './actions';
import { fetchStudioList, fetchRoomList } from './services';

const fetchStudioListFlow: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchStudioListAsync.request)),
    exhaustMap(({ payload }) =>
      from(fetchStudioList(payload)).pipe(
        map(fetchStudioListAsync.success),
        catchError((error) => of(fetchStudioListAsync.failure(error)))
      )
    )
  );

const fetchRoomListFlow: RootEpic = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchRoomListAsync.request)),
    exhaustMap(({ payload }) =>
      from(fetchRoomList(payload)).pipe(
        map(fetchRoomListAsync.success),
        catchError((error) => of(fetchRoomListAsync.failure(error)))
      )
    )
  );

export const epic = combineEpics(fetchStudioListFlow, fetchRoomListFlow);
