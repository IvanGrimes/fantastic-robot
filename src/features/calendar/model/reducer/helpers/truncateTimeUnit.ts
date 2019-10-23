import { getDate, getMonth, setDate, setMonth } from 'date-fns';

type Units = 'month' | 'day';

export const truncateTimeUnit = (unit: Units) => {
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
