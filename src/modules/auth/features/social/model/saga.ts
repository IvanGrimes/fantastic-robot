import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { parse } from 'qs';
import Router from 'next/router';
import { routes } from '@utils/routes';
import { vkAsync } from './actions';
import { vk } from './services';
import { setToken } from '../../../utils/token';

function* vkFlow() {
  try {
    const { code } = yield call(parse, window.location.search.split('?')[1]);

    const { data } = yield call(vk, { code });

    yield call(setToken, data.token);

    yield call(Router.push, routes.main);

    yield put(vkAsync.success());
  } catch (e) {
    yield put(vkAsync.failure(e));
  }
}

export const saga = [takeLatest(getType(vkAsync.request), vkFlow)];
