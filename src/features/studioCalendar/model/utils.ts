import { getMonth, setMonth, getDate, setDate } from 'date-fns';

type Units = 'month' | 'day';

const truncateTimeUnit = (unit: Units) => {
  let set: typeof setMonth | typeof setDate;
  let get: typeof getMonth | typeof getDate;

  if (unit === 'month') {
    set = setMonth;
    get = getMonth;
  } else {
    set = setDate;
    get = getDate;
  }

  return (date: Date | number, amount: number) => set(date, get(date) - amount);
};

export const truncateMonths = truncateTimeUnit('month');

export const truncateDays = truncateTimeUnit('day');
