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
  setMilliseconds,
  setMinutes,
  setSeconds,
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
import { getDateRange } from '../../../utils/getDateRange';

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

export const getInitialState = ({
  reservations,
}: {
  reservations?: number[];
}): DateRangeState => {
  const DEFAULT_STEP: DateRangeState['step'] = 2;
  const date = new Date();
  const getInitialDate = () =>
    setMilliseconds(setSeconds(setMinutes(setHours(date, 0), 0), 0), 0);
  const from = getTime(getInitialDate());
  const to = getTime(addDays(getInitialDate(), DEFAULT_STEP));
  const range = getDateRange(from, to);

  console.log('initialState', reservations);

  return {
    from,
    to,
    step: DEFAULT_STEP,
    range,
    grid: getGrid(range),
    select: getSelect(range),
  };
};

export const initialState: DateRangeState = getInitialState({});

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
      const from = getTime(operation(state.from, state.step));
      const to = getTime(operation(state.to, state.step));
      const range = getDateRange(from, to);

      return {
        ...state,
        from,
        to,
        range,
        grid: getGrid(range),
        select: { ...getSelect(range), ...state.select },
      };
    }
    case SET_MONTH: {
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
        grid: getGrid(range),
        select: { ...getSelect(range), ...state.select },
      };
    }
    case SELECT_TIME: {
      const key = getSelectKeyFromDate(action.payload.timestamp);
      const hasOnlyOneElement = state.select[key].length === 1;
      const isAfterCurrentElement = isAfter(
        action.payload.timestamp,
        state.select[key][0]
      );

      if (hasOnlyOneElement && isAfterCurrentElement) {
        return {
          ...state,
          select: {
            ...state.select,
            [key]: getDateRange(
              state.select[key][0],
              action.payload.timestamp,
              'hours'
            ),
          },
        };
      }

      return {
        ...state,
        select: {
          ...state.select,
          [key]: [action.payload.timestamp],
        },
      };
    }
    default:
      return state;
  }
};
