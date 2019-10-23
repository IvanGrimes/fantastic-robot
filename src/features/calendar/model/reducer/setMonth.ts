import { addMonths, getTime } from 'date-fns';
import { CalendarState } from '../types';
import { getDateRange } from '../../../../utils/getDateRange';
import { getGrid, getSelect } from './helpers';
import { SetMonthAction } from '../actions';
import { truncateMonths } from './helpers/truncateMonths';

export const setMonth = (state: CalendarState, action: SetMonthAction) => {
  const operation =
    action.payload.direction === 'next' ? addMonths : truncateMonths;
  const from = getTime(operation(state.from, 1));
  const to = getTime(operation(state.to, 1));
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
