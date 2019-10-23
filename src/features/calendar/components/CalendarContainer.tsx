import React, { createContext } from 'react';
import { Calendar } from './Calendar';
import { CalendarState, CalendarHandlers, useModel } from '../model/types';

type Props = {
  workHours: {
    [key: string]: {
      from: number;
      to: number;
    };
  };
  reservations: {
    [key: string]: {
      range: number[];
      id: string;
      color?: string;
    }[];
  };
};

export type CalendarContextType = Omit<CalendarState, 'select'> &
  CalendarHandlers & {
    select: number[];
  };

export const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
);

// TODO: Render timeline depends on open/close times (if 0 and 0, then 24 hours)
// TODO: Render reservations

const _CalendarContainer = ({ workHours, reservations }: Props) => {
  const [dateRangeState, dateRangeHandlers] = useModel({
    workHours,
    reservations,
  });

  return (
    <CalendarContext.Provider
      value={{
        ...dateRangeState,
        ...dateRangeHandlers,
        select: Object.entries(dateRangeState.select).reduce<number[]>(
          (acc, [, value]) => [...acc, ...value],
          []
        ),
      }}
    >
      <Calendar />
    </CalendarContext.Provider>
  );
};

export const CalendarContainer = _CalendarContainer;
