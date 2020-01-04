import { addDays, getTime } from 'date-fns';
import { getDateRange } from '@utils/getDateRange';
import { getGrid, getSelect, truncateDays } from './helpers';
import { CalendarState } from '../types';
import { SetRangeAction } from '../actions';

export const setRange = (
  state: CalendarState,
  action: SetRangeAction
): CalendarState => {
  const operation =
    action.payload.direction === 'next' ? addDays : truncateDays;
  const step =
    (action.payload.step === 0 ? 1 : action.payload.step) || state.step;
  const from = getTime(operation(state.from, step));
  const to = getTime(operation(state.to, step));
  const range = getDateRange(from, to);

  return {
    ...state,
    from,
    to,
    range,
    grid: getGrid(range, state.reservations, state.workHours, state.select),
    select: { ...getSelect(range), ...state.select },
  };
};
