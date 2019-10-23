import { CalendarState } from '../../types';
import { getKey } from './getKey';

export const getSelect = (range: CalendarState['range']) =>
  range.reduce<CalendarState['select']>(
    (acc, date) => ({ ...acc, [getKey(date)]: [] }),
    {}
  );
