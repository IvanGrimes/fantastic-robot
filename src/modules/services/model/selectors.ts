import { RootAction, RootState } from '@model/types';
import { createDeepEqualSelector } from '@modules/services/utils/createDeepEqualSelector';
import { parseRequestType } from '../utils/parseRequestType';

const defaultErrorObject = { networkError: '', appError: '', serverError: '' };

export const createRequestLoadingSelector = (actions: RootAction['type'][]) =>
  createDeepEqualSelector(
    (state: RootState) =>
      actions.some(action => {
        const [requestName, requestState] = parseRequestType(action);
        const requestStatus = state.services.loading[requestName];

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
        ...(state.services.errors[requestName] || {}),
        ...defaultErrorObject,
      };
    },
    state => state
  );
