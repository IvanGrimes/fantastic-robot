import { addDays, getTime } from 'date-fns';
import { CalendarState } from '../types';
import { getDateRange } from '../../../../utils/getDateRange';
import { getGrid, getSelect } from './helpers';

export const toggleStep = (state: CalendarState) => {
  const { from } = state;
  const nextStep = state.step === 0 ? 2 : 0;
  const to = nextStep === 0 ? from : getTime(addDays(from, 2));
  const range = getDateRange(from, to);

  return {
    ...state,
    from,
    to,
    range,
    step: (state.step === 0 ? 2 : 0) as CalendarState['step'],
    grid: getGrid(range, state.reservations, state.workHours, state.select),
    select: { ...getSelect(range), ...state.select },
  };
};
