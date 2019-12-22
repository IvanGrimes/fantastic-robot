import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import Router from 'next/router';
import { fetchReservations } from './services/fetchReservations';
import {
  fetchReservationsAsync,
  fetchRoomsAsync,
  fetchInformationAsync,
} from './actions';
import { fetchRooms } from './services/fetchRooms';
import { fetchInformation } from './services/fetchInformation';

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

function* fetchInformationFlow(
  action: ReturnType<typeof fetchInformationAsync.request>
) {
  try {
    const data = yield call(fetchInformation, { id: action.payload.id });

    yield put(fetchInformationAsync.success(data));
  } catch (e) {
    if (e.isAxiosError && e.response.status === 404) {
      yield call(Router.push, '/');
    }

    yield put(fetchInformationAsync.failure(e));
  }
}

export const saga = [
  takeLatest(getType(fetchReservationsAsync.request), fetchReservationsFlow),
  takeLatest(getType(fetchRoomsAsync.request), fetchRoomsFlow),
  takeLatest(getType(fetchInformationAsync.request), fetchInformationFlow),
];
