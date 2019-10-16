export { useModel } from './useModel';

type Handler<T = any> = (...args: T[]) => void;

export type DateRangeState = {
  from: Date;
  to: Date;
  step: 0 | 2;
  range: Date[];
  grid: {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    timestamp: number;
  }[][];
  select: {
    [key: string]: number[];
  };
};

export type DateRangeHandlers = {
  toggleStep: Handler;
  previousViewRange: Handler;
  nextViewRange: Handler;
  previousMonth: Handler;
  nextMonth: Handler;
  selectTime: Handler<number>;
};
