import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { RootState } from './types';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const configureStore = (initialState: RootState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools({ trace: true })(middleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
