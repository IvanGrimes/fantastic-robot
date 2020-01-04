import {
  addDays,
  getTime,
  setHours,
  setMilliseconds,
  setMinutes,
  setMonth,
  setSeconds,
} from 'date-fns';
import { getDateRange } from '@utils/getDateRange';
import { CalendarState, Step } from '../../types';
import { getGrid } from './getGrid';
import { getSelect } from './getSelect';

const DEFAULT_STEP: Step = 2;

export const getInitialState = ({
  workHours = {},
  reservations = {},
}: {
  workHours?: CalendarState['workHours'];
  reservations?: CalendarState['reservations'];
}): CalendarState => {
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
