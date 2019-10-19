import React, { createContext } from 'react';
import { StudioCalendar } from './StudioCalendar';
import { DateRangeState, DateRangeHandlers, useModel } from '../model';

type Props = {
  workHours: {
    [key: string]: {
      from: number;
      to: number;
    };
  };
  reservations: { [key: string]: number[] };
};

export type StudioCalendarContextType = Omit<DateRangeState, 'select'> &
  DateRangeHandlers & {
    select: number[];
  };

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

// TODO: Render timeline depends on open/close times (if 0 and 0, then 24 hours)
// TODO: Render reservations

const _StudioCalendarContainer = ({ workHours, reservations }: Props) => {
  const [dateRangeState, dateRangeHandlers] = useModel({
    workHours,
    reservations,
  });

  return (
    <StudioCalendarContext.Provider
      value={{
        ...dateRangeState,
        ...dateRangeHandlers,
        select: Object.entries(dateRangeState.select).reduce<number[]>(
          (acc, [, value]) => [...acc, ...value],
          []
        ),
      }}
    >
      <StudioCalendar />
    </StudioCalendarContext.Provider>
  );
};

export const StudioCalendarContainer = _StudioCalendarContainer;
