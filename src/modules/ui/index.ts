import { uiReducer as reducer } from './model/reducer';
import * as actions from './model/actions';
import * as selectors from './model/selectors';
import * as hooks from './hooks';

export * from './components';

const rootAction = actions;

export { reducer, actions, selectors, hooks, rootAction };
