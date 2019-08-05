import { parseRequestType } from "../../../utils/parseActionType";

export const createRequestErrorSelector = (actions = []) => (state: any) =>
  actions.reduce((errors, action) => {
    const [requestName, requestState] = parseRequestType(action);

    if (requestState !== "REQUEST") {
      throw new Error(
        `Request should have state 'REQUEST', instead got: ${requestName}.`
      );
    }

    return { ...errors, ...state.api.errors[requestName] };
  }, {});
