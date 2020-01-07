import * as actions from './model/actions';
import { authReducer } from './model/reducer';
import * as selectors from './model/selectors';

const rootAction = actions;
const reducer = authReducer;

export * from './components';

export { rootAction, actions, reducer, selectors };
