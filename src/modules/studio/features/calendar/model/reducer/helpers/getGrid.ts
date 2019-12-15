import {
  getDate,
  getHours,
  getMonth,
  getTime,
  getYear,
  setHours,
} from 'date-fns';
import { CalendarState } from '../../types';
import { getWorkHours } from './getWorkHours';

export const getGrid = (
  range: CalendarState['range'],
  reservations: CalendarState['reservations'],
  workHours: CalendarState['workHours'],
  select: CalendarState['select']
) => {
  const normalizedWorkHours = getWorkHours(workHours, range);
  const valuesOfWorkHours = Object.values(normalizedWorkHours);
  const lengthArrays = valuesOfWorkHours.map(item => item.length);
  const longestArrayIndex = lengthArrays.indexOf(Math.max(...lengthArrays));
  const longestWorkHours = valuesOfWorkHours[longestArrayIndex];

  return longestWorkHours.reduce<CalendarState['grid']>(
    (acc, time) => [
      ...acc,
      range.map(item => {
        const hours = getHours(time);
        const date = setHours(item, hours);
        const timestamp = getTime(date);
        const key = getTime(item);
        const isWorkingHours = normalizedWorkHours[item].includes(timestamp);
        let reservation: {
          reserved: boolean;
          canReserve: boolean;
          id?: string;
          color?: string[];
        } = {
          reserved: false,
          canReserve: isWorkingHours,
        };

        if (reservations[key]) {
          const currentReservation = reservations[key].filter(item1 =>
            item1.range.includes(timestamp)
          );

          if (currentReservation.length) {
            reservation = {
              ...currentReservation.reduce<{ color?: string[] }>(
                (acc2, item2) => {
                  return {
                    ...acc2,
                    color: item2.color
                      ? [...(acc2.color || []), item2.color]
                      : acc2.color,
                  };
                },
                {}
              ),
              reserved: true,
              canReserve: isWorkingHours && false,
            };
          }
        }

        return {
          year: getYear(item),
          month: getMonth(item),
          day: getDate(item),
          hours,
          minutes: 0,
          timestamp,
          reservation,
          isWorkingHours,
          selected: select[key] ? select[key].includes(timestamp) : false,
        };
      }),
    ],
    []
  );
};
