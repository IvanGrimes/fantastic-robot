export { useModel } from './useModel';

type Handler<T = any> = (...args: T[]) => void;

export type DateRangeState = {
  from: number;
  to: number;
  step: 0 | 2;
  range: number[];
  grid: {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    timestamp: number;
    selected: boolean;
    reservation: {
      id?: string;
      reserved: boolean;
      canReserve: boolean;
    };
    isWorkingHours: boolean;
  }[][];
  select: {
    [key: string]: number[];
  };
  reservations: {
    [key: string]: {
      range: number[];
      id: string;
    }[];
  };
  workHours: {
    [key: string]: {
      from: number;
      to: number;
    };
  };
};

export type DateRangeHandlers = {
  toggleStep: Handler;
  previousRange: Handler;
  nextRange: Handler;
  previousMonth: Handler;
  nextMonth: Handler;
  selectTime: Handler<number>;
};
