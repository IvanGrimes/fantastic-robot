import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { fetchReservations } from './services/fetchReservations';
import { fetchReservationsAsync } from './actions';

function* fetchReservationsFlow(
  action: ReturnType<typeof fetchReservationsAsync.request>
) {
  try {
    const data = yield call(fetchReservations, {
      studioId: action.payload.studioId,
    });

    yield put(fetchReservationsAsync.success(data));
  } catch (e) {
    yield put(fetchReservationsAsync.failure(e));
  }
}

export const studioDetailsSaga = [
  takeLatest(getType(fetchReservationsAsync.request), fetchReservationsFlow),
];
