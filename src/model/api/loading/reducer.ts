import { parseRequestType } from '../../../lib/parseActionType';
import { RootAction } from '../../types';

type LoadingState = {
  [key: string]: boolean;
};

const initialState: LoadingState = {};

export const loadingReducer = (state = initialState, { type }: RootAction) => {
  const matches = parseRequestType(type);

  if (matches) {
    const [requestName, requestState] = matches;

    return {
      ...state,
      [requestName]: requestState === 'REQUEST',
    };
  }

  return state;
};
