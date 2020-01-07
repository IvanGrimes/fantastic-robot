import * as ui from '@modules/./ui';
import * as studio from '@modules/studio';
import * as auth from '@modules/auth';

export default {
  ui: ui.rootAction,
  studio: studio.rootAction,
  auth: auth.rootAction,
};
