import { applyMiddleware, createStore } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { rootEpic } from './rootEpic';

const makeStore: MakeStore<RootState> = () => {
  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState
  >();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export const storeWrapper = createWrapper<RootState>(makeStore);

export const mockStore = () => makeStore({});
