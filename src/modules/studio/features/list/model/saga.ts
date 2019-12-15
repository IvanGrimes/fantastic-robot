import {
  call,
  cancel,
  cancelled,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { fetchFilterStudiosAsync, fetchStudiosAsync } from './actions';
import { fetchFilterStudios, fetchStudios } from './services';
import { getFilters, getHasFilters } from '../../filters/model/selectors';
import { getNonEmptyValues } from '../../filters/utils/getNonEmptyValues';

function* fetchStudiosFlow(
  action: ReturnType<typeof fetchStudiosAsync.request>
) {
  const { payload } = action;
  const hasFilters = yield select(getHasFilters);
  const filters: ReturnType<typeof getFilters> = yield select(getFilters);

  try {
    if (hasFilters) {
      yield call(
        fetchFilterStudiosFlow,
        fetchFilterStudiosAsync.request({
          ...payload,
          ...filters,
          updateStrategy: 'merge',
        })
      );

      yield cancel();
    }

    const data = yield call(fetchStudios, payload);

    yield put(fetchStudiosAsync.success(data));
  } catch (e) {
    yield put(fetchStudiosAsync.failure(e));
  } finally {
    if (yield cancelled()) {
      yield put(fetchStudiosAsync.cancel());
    }
  }
}

function* fetchFilterStudiosFlow(
  action: ReturnType<typeof fetchFilterStudiosAsync.request>
) {
  const {
    payload: { updateStrategy, ...payload },
  } = action;
  const filters = yield select(getFilters);
  const injectedFilters = { ...payload, ...filters };
  const params = getNonEmptyValues<typeof injectedFilters>(injectedFilters);

  try {
    const data = yield call(fetchFilterStudios, params);

    yield put(fetchFilterStudiosAsync.success(data));
  } catch (e) {
    yield put(fetchFilterStudiosAsync.failure(e));
  }
}

export const saga = [
  takeLatest(getType(fetchStudiosAsync.request), fetchStudiosFlow),
  takeLatest(getType(fetchFilterStudiosAsync.request), fetchFilterStudiosFlow),
];
