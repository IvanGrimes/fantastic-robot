import { parseRequestType } from '../../../lib/parseActionType';
import { RootAction } from '../../types';

export type ErrorsState = {
  [key: string]: {
    appError?: string;
    serverError?: string;
    networkError?: string;
  };
};

const initialState: ErrorsState = {};

export const errorsReducer = (
  state = initialState,
  // @ts-ignore
  { type, payload }: RootAction
) => {
  const matches = parseRequestType(type);

  if (matches) {
    const [requestName, requestState] = matches;

    if (requestState === 'REQUEST' || requestState === 'FAIL') {
      return {
        ...state,
        [requestName]:
          requestState === 'FAIL' ? { networkError: payload.error } : {},
      };
    }

    return state;
  }

  return state;
};
