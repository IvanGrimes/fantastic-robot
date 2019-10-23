import { getTime, setHours } from 'date-fns';
import { CalendarState } from '../../types';
import { getDateRange } from '../../../../../utils/getDateRange';

export const getWorkHours = (
  workHours: CalendarState['workHours'],
  range: CalendarState['range']
) => {
  const workHoursByRange = range.reduce<{
    [key: string]: { from: number; to: number };
  }>(
    (acc, item) => ({
      ...acc,
      [item]: workHours[item] || {
        from: getTime(setHours(item, 9)),
        to: getTime(setHours(item, 19)),
      },
    }),
    {}
  );

  return Object.entries(workHoursByRange)
    .filter(([key]) => range.includes(Number(key)))
    .reduce<{ [key: string]: number[] }>(
      (acc, [key, value]) => ({
        ...acc,
        [key]: getDateRange(value.from, value.to, 'hours'),
      }),
      {}
    );
};
