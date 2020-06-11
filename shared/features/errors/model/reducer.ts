import { parseActionType } from '../../../utils';
import { RequestError } from './types';

const initialState: { [key: string]: RequestError | undefined } = {};

export const reducer = (
  state = initialState,
  // @ts-ignore
  { type, payload }: RootAction
) => {
  const matches = parseActionType(type);

  if (!matches) {
    return state;
  }

  const [, requestPrefix, requestState] = matches;
  return {
    ...state,
    [requestPrefix]:
      requestState === 'FAIL' ? { message: payload.message } : { message: '' },
  };
};
