import React, { createContext } from 'react';
import { StudioCalendar } from './StudioCalendar';
import { DateRangeState, DateRangeHandlers, useModel } from '../model';

export type StudioCalendarContextType = DateRangeState & DateRangeHandlers;

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

const _StudioCalendarContainer = () => {
  const [dateRangeState, dateRangeHandlers] = useModel();

  return (
    <StudioCalendarContext.Provider
      value={{
        ...dateRangeState,
        ...dateRangeHandlers,
      }}
    >
      <StudioCalendar />
    </StudioCalendarContext.Provider>
  );
};

export const StudioCalendarContainer = _StudioCalendarContainer;
