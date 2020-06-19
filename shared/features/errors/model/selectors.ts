import { getType, ActionCreator } from 'typesafe-actions';
import { getStatePropFromActionType } from '../../../utils';
import { RequestError } from './types';

const emptyError: RequestError = { message: '' };

export const getState = (state: RootState) => state.shared.errors;

const getError = (error: RequestError | undefined) =>
  typeof error === 'undefined' ? emptyError : error;

export const getRequestError = (action: ActionCreator | ActionCreator[]) => (
  state: RootState
) => {
  const errors = getState(state);

  if (Array.isArray(action)) {
    const [error] = action.map((a) => errors[getStatePropFromActionType(getType(a))]).filter(e => e);

    return getError(error);
  }

  return getError(errors[getStatePropFromActionType(getType(action))]);
};
