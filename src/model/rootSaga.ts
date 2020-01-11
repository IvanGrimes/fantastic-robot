import { all } from 'redux-saga/effects';
import * as studio from '@modules/studio';
import * as auth from '@modules/auth';

export function* rootSaga() {
  yield all([...studio.saga, ...auth.saga]);
}
