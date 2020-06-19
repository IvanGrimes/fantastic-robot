import { parseActionType } from '../../../utils';

const initialState: { [key: string]: boolean | undefined } = {};

export const reducer = (state = initialState, { type }: RootAction) => {
  const matches = parseActionType(type);

  if (!matches) {
    return state;
  }

  const [, requestPrefix, requestState] = matches;
  return {
    ...state,
    [requestPrefix]: requestState === 'REQUEST',
  };
};
