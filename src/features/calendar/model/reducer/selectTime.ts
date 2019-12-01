import { isAfter } from 'date-fns';
import { partial } from 'ramda';
import { CalendarState } from '../types';
import { SelectTimeAction } from '../actions';
import { checkOverlapInDateRange, getGrid, getKey } from './helpers';
import { getDateRange } from '../../../../utils/getDateRange';

export const selectTime = (
  state: CalendarState,
  action: SelectTimeAction
): CalendarState => {
  const key = getKey(action.payload.timestamp);
  const hasAnyElement = state.select[key].length;
  const hasOneElement = state.select[key].length === 1;
  const isAfterCurrentElement = isAfter(
    action.payload.timestamp,
    state.select[key][0]
  );
  const canMakeRange = hasAnyElement && isAfterCurrentElement;
  const selectRange = isAfterCurrentElement
    ? getDateRange(state.select[key][0], action.payload.timestamp, 'hours')
    : [];
  const hasOverlap = canMakeRange
    ? checkOverlapInDateRange(selectRange, state.reservations[key] || [])
    : false;
  const isSameAsStartRange = state.select[key][0] === action.payload.timestamp;
  const partialGrid = partial(getGrid, [
    state.range,
    state.reservations,
    state.workHours,
  ]);

  // NOTE: Clear current range
  if (isSameAsStartRange && hasOneElement) {
    const select = {
      ...state.select,
      [key]: [],
    };

    return {
      ...state,
      select,
      grid: partialGrid(select),
    };
  }

  // NOTE: Create range
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

  // NOTE: Select start of the range
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
