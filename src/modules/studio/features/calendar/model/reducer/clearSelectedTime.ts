import { CalendarState } from '../types';
import { getGrid } from './helpers';

export const clearSelectedTime = (state: CalendarState): CalendarState => {
  const nextSelect = Object.entries(state.select).reduce(
    (acc, [key]) => ({ ...acc, [key]: [] }),
    {}
  );

  return {
    ...state,
    select: nextSelect,
    grid: getGrid(state.range, state.reservations, state.workHours, nextSelect),
  };
};
