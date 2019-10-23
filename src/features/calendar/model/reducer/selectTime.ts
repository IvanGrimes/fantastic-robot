import { isAfter } from 'date-fns';
import { partial } from 'ramda';
import { CalendarState } from '../types';
import { SelectTimeAction } from '../actions';
import { checkOverlapInDateRange, getGrid, getKey } from './helpers';
import { getDateRange } from '../../../../utils/getDateRange';

export const selectTime = (state: CalendarState, action: SelectTimeAction) => {
  const key = getKey(action.payload.timestamp);
  const hasOnlyOneElement = state.select[key].length === 1;
  const isAfterCurrentElement = isAfter(
    action.payload.timestamp,
    state.select[key][0]
  );
  const canMakeRange = hasOnlyOneElement && isAfterCurrentElement;
  const selectRange = canMakeRange
    ? getDateRange(state.select[key][0], action.payload.timestamp, 'hours')
    : [];
  const hasOverlap = canMakeRange
    ? checkOverlapInDateRange(selectRange, state.reservations[key] || [])
    : false;
  const partialGrid = partial(getGrid, [
    state.range,
    state.reservations,
    state.workHours,
  ]);

  if (canMakeRange && !hasOverlap) {
    const select = {
      ...state.select,
      [key]: selectRange,
    };

    return {
      ...state,
      select,
      grid: partialGrid(select),
    };
  }

  const select = {
    ...state.select,
    [key]: [action.payload.timestamp],
  };

  return {
    ...state,
    select,
    grid: partialGrid(select),
  };
};
