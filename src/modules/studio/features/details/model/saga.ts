import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { fetchReservations } from './services/fetchReservations';
import { fetchReservationsAsync, fetchRoomsAsync } from './actions';
import { fetchRooms } from './services/fetchRooms';

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

function* fetchRoomsFlow(action: ReturnType<typeof fetchRoomsAsync.request>) {
  try {
    const data = yield call(fetchRooms, {
      studioId: action.payload.studioId,
    });

    yield put(fetchRoomsAsync.success(data));
  } catch (e) {
    yield put(fetchRoomsAsync.failure(e));
  }
}

export const studioDetailsSaga = [
  takeLatest(getType(fetchReservationsAsync.request), fetchReservationsFlow),
  takeLatest(getType(fetchRoomsAsync.request), fetchRoomsFlow),
];
