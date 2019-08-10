import { parseRequestType } from '../../../lib/parseActionType';
import { RootAction, RootState } from '../../types';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';

const defaultErrorObject = { networkError: '', appError: '', serverError: '' };

export const createRequestErrorSelector = (action: RootAction['type']) =>
  createDeepEqualSelector(
    (state: RootState) => {
      const [requestName, requestState] = parseRequestType(action);

      if (requestState !== 'REQUEST') {
        throw new Error(
          `Request should have state 'REQUEST', instead got: ${requestName}.`
        );
      }

      return {
        ...(state.api.errors[requestName] || {}),
        ...defaultErrorObject,
      };
    },
    state => state
  );
