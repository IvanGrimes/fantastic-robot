import { parseRequestType } from '../../../utils/parseActionType';

export const errors = (state = {}, { type, payload }: { type: string, payload: { error: string } }) => {
  const matches = parseRequestType(type);

  if (matches) {
    const [requestName, requestState] = matches;

    if (requestState === 'REQUEST' || requestState === 'FAIL') {
      return {
        ...state,
        [requestName]:
          requestState === 'FAIL' ? payload.error : {},
      };
    }
  }

  return state;
};
