import { parseRequestType } from '../../../utils/parseActionType';

export const createRequestLoadingSelector = (actions: string[]) => (state: any) =>
  actions.some(action => {
    const [requestName, requestState] = parseRequestType(action);

    if (requestState !== 'REQUEST') {
      throw new Error(
        `Request should have state 'REQUEST', instead got: ${requestName}.`
      );
    }

    return Boolean(state.api.loading[requestName]);
  });
