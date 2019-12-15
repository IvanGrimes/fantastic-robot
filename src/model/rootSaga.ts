import { all } from 'redux-saga/effects';
import * as studio from '@modules/studio';

export function* rootSaga() {
  yield all([...studio.saga]);
}
