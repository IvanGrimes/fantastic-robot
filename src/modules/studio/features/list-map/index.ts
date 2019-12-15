import * as actions from './model/actions';
import * as selectors from './model/selectors';
import { StudioListMap as DefaultStudioListMap } from './components';

const enabled = false;

export { studioMapListReducer } from './model/reducer';

export { enabled, actions, selectors };

export const StudioListMap = enabled ? DefaultStudioListMap : () => null;
