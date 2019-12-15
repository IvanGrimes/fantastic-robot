import { parseRequestType } from '@utils/parseRequestType';
import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';
import { RootAction, RootState } from '../../types';

export const createRequestLoadingSelector = (actions: RootAction['type'][]) =>
  createDeepEqualSelector(
    (state: RootState) =>
      actions.some(action => {
        const [requestName, requestState] = parseRequestType(action);
        const requestStatus = state.api.loading[requestName];

        if (requestState !== 'REQUEST') {
          throw new Error(
            `Request should have state 'REQUEST', instead got: ${requestName}.`
          );
        }

        if (typeof requestStatus === 'undefined') {
          return true;
        }

        return requestStatus || false;
      }),
    state => state
  );
