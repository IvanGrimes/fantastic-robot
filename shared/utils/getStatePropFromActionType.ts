import { parseActionType } from './parseActionType';

export const getStatePropFromActionType = (action: string) => {
  const matches = parseActionType(action);

  return matches ? matches[1] : '';
};
