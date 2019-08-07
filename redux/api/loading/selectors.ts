import { parseRequestType } from '../../../lib/parseActionType';
import { RootAction, RootState } from '../../types';

export const createRequestLoadingSelector = (actions: RootAction['type'][]) => (
  state: RootState
) =>
  actions.some(action => {
    const [requestName, requestState] = parseRequestType(action);

    if (requestState !== 'REQUEST') {
      throw new Error(
        `Request should have state 'REQUEST', instead got: ${requestName}.`
      );
    }

    return state.api.loading[requestName] || false;
  });
