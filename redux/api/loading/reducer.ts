import { parseRequestType } from '../../../utils/parseActionType';

export const loading = (state = {}, { type }: { type: string }) => {
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
