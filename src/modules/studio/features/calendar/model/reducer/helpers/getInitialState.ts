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
  fixedStep,
  multipleSelect,
}: {
  workHours?: CalendarState['workHours'];
  reservations?: CalendarState['reservations'];
  fixedStep?: Step;
  multipleSelect: boolean;
}): CalendarState => {
  const hasFixedStep = typeof fixedStep === 'undefined';
  const step = hasFixedStep ? DEFAULT_STEP : (fixedStep as Step);
  const date = new Date();
  const getInitialDate = () =>
    setMonth(
      setMilliseconds(setSeconds(setMinutes(setHours(date, 0), 0), 0), 0),
      10
    );
  const from = getTime(getInitialDate());
  const to = getTime(addDays(getInitialDate(), step));
  const range = getDateRange(from, to);

  return {
    from,
    to,
    step,
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
    canChangeStep: hasFixedStep,
    multipleSelect,
  };
};
