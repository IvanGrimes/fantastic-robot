import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import {
  CalendarState,
  CalendarHandlers,
  Step,
  useModel,
} from '../model/types';

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
  fixedStep?: Step;
  multipleSelect?: boolean;
  children: ReactNode | ReactNode[];
};

export type CalendarContextType = Omit<CalendarState, 'select'> &
  CalendarHandlers & {
    select: number[];
    getSelectFrom: () => number | undefined;
    getSelectTo: () => number | undefined;
  };

const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
);

export const CalendarProvider = ({
  workHours,
  reservations,
  fixedStep,
  multipleSelect = true,
  children,
}: CalendarProviderProps) => {
  const [dateRangeState, dateRangeHandlers] = useModel({
    workHours,
    reservations,
    fixedStep,
    multipleSelect,
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
