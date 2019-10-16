import {
  addDays,
  addMonths,
  getDate,
  getMonth,
  getYear,
  isAfter,
  setHours,
  setMinutes,
} from 'date-fns';
import { Reducer } from 'react';
import { Actions, SET_MONTH, SET_VIEW_RANGE, TOGGLE_STEP } from './actions';
import { truncateDays, truncateMonths } from './utils';
import { DateRangeState } from './index';

const getRange = (start: Date, end: Date) => {
  const dateRange: Date[] = [];

  for (let i: Date = start; !isAfter(i, end); i = addDays(i, 1)) {
    dateRange.push(i);
  }

  return dateRange;
};

const getGrid = (range: DateRangeState['range']) =>
  new Array(10).fill(null).reduce<DateRangeState['grid']>(
    (acc, _time, index) => [
      ...acc,
      range.map(item => ({
        year: getYear(item),
        month: getMonth(item),
        day: getDate(item),
        hours: index + 10,
        minutes: 0,
      })),
    ],
    []
  );

const getInitialState = (): DateRangeState => {
  const DEFAULT_STEP: DateRangeState['step'] = 2;
  const date = new Date();
  const getInitialDate = () => setMinutes(setHours(date, 0), 0);
  const from = getInitialDate();
  const to = addDays(getInitialDate(), DEFAULT_STEP);
  const range = getRange(from, to);

  return {
    from,
    to,
    step: DEFAULT_STEP,
    range,
    grid: getGrid(range),
  };
};

export const initialState: DateRangeState = getInitialState();

export const reducer: Reducer<DateRangeState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_STEP: {
      const nextStep = state.step === 0 ? 2 : 0;

      return {
        ...state,
        step: state.step === 0 ? 2 : 0,
        grid:
          nextStep === 0
            ? state.grid.map(item => [item[0]])
            : getGrid(state.range),
      };
    }
    case SET_VIEW_RANGE: {
      const operation =
        action.payload.direction === 'next' ? addDays : truncateDays;
      const from = operation(state.from, state.step);
      const to = operation(state.to, state.step);

      return {
        ...state,
        from,
        to,
        range: getRange(from, to),
        grid: getGrid(state.range),
      };
    }
    case SET_MONTH: {
      const operation =
        action.payload.direction === 'next' ? addMonths : truncateMonths;
      const from = operation(state.from, 1);
      const to = operation(state.to, 1);

      return {
        ...state,
        from,
        to,
        range: getRange(from, to),
        grid: getGrid(state.range),
      };
    }
    default:
      return state;
  }
};
