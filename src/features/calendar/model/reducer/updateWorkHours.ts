import { CalendarState } from '../types';
import { UpdateWorkHoursAction } from '../actions';

export const updateWorkHours = (
  state: CalendarState,
  { payload: { workHours } }: UpdateWorkHoursAction
): CalendarState => ({
  ...state,
  workHours,
});
