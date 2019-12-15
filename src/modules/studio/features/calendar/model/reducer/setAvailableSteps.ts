import { CalendarState } from '../types';
import { SetAvailableStepsAction } from '../actions';

export const setAvailableSteps = (
  state: CalendarState,
  { payload }: SetAvailableStepsAction
): CalendarState => ({
  ...state,
  availableSteps: {
    ...state.availableSteps,
    ...payload.availableSteps,
  },
});
