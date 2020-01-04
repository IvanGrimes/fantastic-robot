import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { CalendarState, CalendarHandlers, useModel } from '../model/types';

type CalendarProviderProps = {
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
  children: ReactNode | ReactNode[];
};

export type CalendarContextType = Omit<CalendarState, 'select'> &
  CalendarHandlers & {
    select: number[];
    selectByDate: CalendarState['select'];
    getSelectFrom: () => number | undefined;
    getSelectTo: () => number | undefined;
  };

const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
);

export const CalendarProvider = ({
  workHours,
  reservations,

  children,
}: CalendarProviderProps) => {
  const [dateRangeState, dateRangeHandlers] = useModel({
    workHours,
    reservations,
  });
  const select = useMemo(
    () =>
      Object.entries(dateRangeState.select).reduce<number[]>(
        (acc, [, value]) => [...acc, ...value],
        []
      ),
    [dateRangeState.select]
  );

  return (
    <CalendarContext.Provider
      value={{
        ...dateRangeState,
        ...dateRangeHandlers,
        select,
        selectByDate: dateRangeState.select,
        getSelectFrom: () => select[0],
        getSelectTo: () =>
          select.length > 1 ? select[select.length - 1] : undefined,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
