import { uiReducer as reducer } from './model/reducer';
import * as actions from './model/actions';
import * as selectors from './model/selectors';
import * as hooks from './hooks';

const rootAction = actions;

export * from './components';
export { reducer, actions, selectors, hooks, rootAction };
