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

  return {
    from,
    to,
    step: DEFAULT_STEP,
    availableSteps: {
      '0': true,
      '2': false,
      '4': false,
    },
    range,
    grid: getGrid(range, reservations, workHours, {}),
    select: getSelect(range),
    reservations,
    workHours,
  };
};
