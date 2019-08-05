import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { EpicDependencies, RootAction, RootState } from './types';
import { rootReducer } from './rootReducer';
import { rootEpic } from './rootEpic';
import { rootApi } from "./rootApi";
import rootAction from "./rootAction";

export const configureStore = (initialState: RootState) => {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, EpicDependencies>({
    dependencies: {
      api: rootApi,
      action: rootAction,
    }
  });
  const middleware = applyMiddleware(epicMiddleware);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
};
