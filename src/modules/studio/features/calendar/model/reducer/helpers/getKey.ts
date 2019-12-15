import { getTime, setHours, setMinutes } from 'date-fns';

export const getKey = (date: Date | number) =>
  getTime(setMinutes(setHours(date, 0), 0));
