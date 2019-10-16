export { useModel } from './useModel';

type Handler = () => void;

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
  }[][];
};

export type DateRangeHandlers = {
  toggleStep: Handler;
  previousViewRange: Handler;
  nextViewRange: Handler;
  previousMonth: Handler;
  nextMonth: Handler;
};
