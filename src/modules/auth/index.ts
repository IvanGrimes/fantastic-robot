import * as signUp from './features/sign-up';
import * as social from './features/social';
import * as pages from './pages';
import * as coreActions from './model/actions';
import * as selectors from './model/selectors';
import { saga as coreSaga } from './model/saga';

const actions = { ...signUp.actions, ...social.actions, ...coreActions };

const rootAction = {
  ...coreActions,
  signUp: signUp.actions,
  social: social.actions,
};

const saga = [...signUp.saga, ...social.saga, ...coreSaga];

export * from './model/reducer';

export { rootAction, actions, saga, pages, selectors };
