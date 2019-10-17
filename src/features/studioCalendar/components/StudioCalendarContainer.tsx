import React, { createContext } from 'react';
import { StudioCalendar } from './StudioCalendar';
import { DateRangeState, DateRangeHandlers, useModel } from '../model';

type Props = {
  reservations: number[];
};

export type StudioCalendarContextType = Omit<DateRangeState, 'select'> &
  DateRangeHandlers & {
    select: number[];
  };

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

const _StudioCalendarContainer = ({ reservations }: Props) => {
  const [dateRangeState, dateRangeHandlers] = useModel({ reservations });

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
