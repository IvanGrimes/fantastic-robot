import {
  addDays,
  addMonths,
  getDate,
  getDay,
  getHours,
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

// TODO: split each case in module

const getWorkHours = (
  workHours: DateRangeState['workHours'],
  range: DateRangeState['range']
) => {
  const workHoursByRange = range.reduce<{
    [key: string]: { from: number; to: number };
  }>(
    (acc, item) => ({
      ...acc,
      [item]: workHours[item] || {
        from: getTime(setHours(item, 9)),
        to: getTime(setHours(item, 19)),
      },
    }),
    {}
  );

  return Object.entries(workHoursByRange)
    .filter(([key]) => range.includes(Number(key)))
    .reduce<{ [key: string]: number[] }>(
      (acc, [key, value]) => ({
        ...acc,
        [key]: getDateRange(value.from, value.to, 'hours'),
      }),
      {}
    );
};

const getGrid = (
  range: DateRangeState['range'],
  reservations: DateRangeState['reservations'],
  workHours: DateRangeState['workHours']
) => {
  const normalizedWorkHours = getWorkHours(workHours, range);
  const valuesOfWorkHours = Object.values(normalizedWorkHours);
  const lengthArrays = valuesOfWorkHours.map(item => item.length);
  const longestArrayIndex = lengthArrays.indexOf(Math.max(...lengthArrays));
  const longestWorkHours = valuesOfWorkHours[longestArrayIndex];

  return longestWorkHours.reduce<DateRangeState['grid']>(
    (acc, time) => [
      ...acc,
      range.map(item => {
        const hours = getHours(time);
        const date = setHours(item, hours);
        const timestamp = getTime(date);
        const key = getTime(item);

        return {
          year: getYear(item),
          month: getMonth(item),
          day: getDate(item),
          hours,
          minutes: 0,
          timestamp,
          reserved: reservations[key]
            ? reservations[key].includes(timestamp)
            : false,
          canReserve: normalizedWorkHours[item].includes(timestamp),
        };
      }),
    ],
    []
  );
};

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
  workHours = {},
  reservations = {},
}: {
  workHours?: DateRangeState['workHours'];
  reservations?: DateRangeState['reservations'];
}): DateRangeState => {
  const DEFAULT_STEP: DateRangeState['step'] = 2;
  const date = new Date();
  const getInitialDate = () =>
    setMilliseconds(setSeconds(setMinutes(setHours(date, 0), 0), 0), 0);
  const from = getTime(getInitialDate());
  const to = getTime(addDays(getInitialDate(), DEFAULT_STEP));
  const range = getDateRange(from, to);

  return {
    from,
    to,
    step: DEFAULT_STEP,
    range,
    grid: getGrid(range, reservations, workHours),
    select: getSelect(range),
    reservations,
    workHours,
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
            : getGrid(state.range, state.reservations, state.workHours),
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
        grid: getGrid(range, state.reservations, state.workHours),
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
        grid: getGrid(range, state.reservations, state.workHours),
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
