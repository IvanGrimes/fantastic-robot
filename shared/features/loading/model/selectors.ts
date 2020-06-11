import { getType, ActionCreator } from 'typesafe-actions';
import { getStatePropFromActionType } from '../../../utils';

export const getState = (state: RootState) => state.shared.loading;

const isLoading = (state: boolean | undefined) =>
  typeof state === 'undefined' || state;

export const getRequestLoading = (action: ActionCreator | ActionCreator[]) => (
  state: RootState
) => {
  const loading = getState(state);

  if (Array.isArray(action)) {
    return action.some((a) =>
      isLoading(loading[getStatePropFromActionType(getType(a))])
    );
  }

  return isLoading(loading[getStatePropFromActionType(getType(action))]);
};
