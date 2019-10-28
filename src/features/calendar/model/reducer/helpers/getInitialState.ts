import {
  addDays,
  getTime,
  setHours,
  setMilliseconds,
  setMinutes,
  setMonth,
  setSeconds,
} from 'date-fns';
import { CalendarState } from '../../types';
import { getDateRange } from '../../../../../utils/getDateRange';
import { getGrid } from './getGrid';
import { getSelect } from './getSelect';

export const getInitialState = ({
  workHours = {},
  reservations = {},
}: {
  workHours?: CalendarState['workHours'];
  reservations?: CalendarState['reservations'];
}): CalendarState => {
  const DEFAULT_STEP: CalendarState['step'] = 2;
  const date = new Date();
  const getInitialDate = () =>
    setMonth(
      setMilliseconds(setSeconds(setMinutes(setHours(date, 0), 0), 0), 0),
      10
    );
  const from = getTime(getInitialDate());
  const to = getTime(addDays(getInitialDate(), DEFAULT_STEP));
  const range = getDateRange(from, to);
  const mockMultiReservation = false;

  return {
    from,
    to,
    step: DEFAULT_STEP,
    range,
    grid: getGrid(range, reservations, workHours, {}),
    select: getSelect(range),
    reservations: mockMultiReservation
      ? {
          ...reservations,
          1574283600000: [
            ...(reservations[1574283600000] || []),
            {
              id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
              color: '#c377e0',
              range: [
                1574344800000,
                1574348400000,
                1574352000000,
                1574355600000,
                1574359200000,
              ],
            },
            {
              id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
              color: '#4fe0bc',
              range: [
                1574344800000,
                1574348400000,
                1574352000000,
                1574355600000,
                1574359200000,
              ],
            },
            {
              id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
              color: '#e0bc0e',
              range: [
                1574344800000,
                1574348400000,
                1574352000000,
                1574355600000,
                1574359200000,
              ],
            },
            {
              id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
              color: '#e0351c',
              range: [
                1574344800000,
                1574348400000,
                1574352000000,
                1574355600000,
                1574359200000,
              ],
            },
          ],
        }
      : reservations,
    workHours,
  };
};
