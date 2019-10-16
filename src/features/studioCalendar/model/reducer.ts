import {
  addDays,
  addMonths,
  getDate,
  getDay,
  getMonth,
  getTime,
  getYear,
  isAfter,
  setHours,
  setMinutes,
} from 'date-fns';
import { Reducer } from 'react';
import {
  Actions,
  SELECT_TIME,
  SET_MONTH,
  SET_RANGE,
  TOGGLE_STEP,
} from './actions';
import { truncateDays, truncateMonths } from './utils';
import { DateRangeState } from './index';

// TODO: Split each reducer case into separated module

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
      range.map(item => {
        const hours = index + 10;
        const date = setHours(item, hours);

        return {
          year: getYear(item),
          month: getMonth(item),
          day: getDate(item),
          hours,
          minutes: 0,
          timestamp: getTime(date),
        };
      }),
    ],
    []
  );

const getSelectKeyFromDate = (date: Date | number) =>
  getYear(date).toString() +
  getMonth(date).toString() +
  getDay(date).toString();

const getSelect = (range: DateRangeState['range']) =>
  range.reduce<DateRangeState['select']>(
    (acc, date) => ({ ...acc, [getSelectKeyFromDate(date)]: [] }),
    {}
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
    select: getSelect(range),
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
        select: { ...getSelect(state.range), ...state.select },
      };
    }
    case SET_RANGE: {
      const operation =
        action.payload.direction === 'next' ? addDays : truncateDays;
      const from = operation(state.from, state.step);
      const to = operation(state.to, state.step);
      const range = getRange(from, to);

      return {
        ...state,
        from,
        to,
        range: getRange(from, to),
        grid: getGrid(range),
        select: { ...getSelect(range), ...state.select },
      };
    }
    case SET_MONTH: {
      const operation =
        action.payload.direction === 'next' ? addMonths : truncateMonths;
      const from = operation(state.from, 1);
      const to = operation(state.to, 1);
      const range = getRange(from, to);

      return {
        ...state,
        from,
        to,
        range,
        grid: getGrid(range),
        select: { ...getSelect(range), ...state.select },
      };
    }
    case SELECT_TIME: {
      const key = getSelectKeyFromDate(action.payload.timestamp);

      return {
        ...state,
        select: {
          ...state.select,
          [key]: [...state.select[key], action.payload.timestamp],
        },
      };
    }
    default:
      return state;
  }
};
