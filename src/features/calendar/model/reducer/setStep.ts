import { addDays, getTime } from 'date-fns';
import { CalendarState } from '../types';
import { getDateRange } from '../../../../utils/getDateRange';
import { getGrid, getSelect } from './helpers';
import { SetStepAction } from '../actions';

export const setStep = (state: CalendarState, { payload }: SetStepAction) => {
  const { from } = state;
  const nextStep = payload.step;
  const to = nextStep === 0 ? from : getTime(addDays(from, nextStep));
  const range = getDateRange(from, to);

  return {
    ...state,
    from,
    to,
    range,
    step: nextStep,
    grid: getGrid(range, state.reservations, state.workHours, state.select),
    select: { ...getSelect(range), ...state.select },
  };
};
