import React, { createContext } from 'react';
import { StudioCalendar } from './StudioCalendar';
import { DateRangeState, DateRangeHandlers, useModel } from '../model';

export type StudioCalendarContextType = Omit<DateRangeState, 'select'> &
  DateRangeHandlers & {
    select: number[];
  };

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

const _StudioCalendarContainer = () => {
  const [dateRangeState, dateRangeHandlers] = useModel();

  console.log(dateRangeState);

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
