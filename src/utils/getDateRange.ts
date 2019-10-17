import { addDays, addHours, getTime, isAfter } from 'date-fns';

export const getDateRange = (
  start: number,
  end: number,
  unit: 'day' | 'hours' = 'day'
) => {
  const dateRange: Date[] = [];
  const incrementer = unit === 'day' ? addDays : addHours;

  for (let i = new Date(start); !isAfter(i, end); i = incrementer(i, 1)) {
    dateRange.push(i);
  }

  return dateRange.map(item => getTime(item));
};
