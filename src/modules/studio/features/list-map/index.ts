import * as actions from './model/actions';
import * as selectors from './model/selectors';
import { ListMap as DefaultListMap } from './components';

const enabled = false;

export { reducer } from './model/reducer';

export { enabled, actions, selectors };

export const ListMap = enabled ? DefaultListMap : () => null;
