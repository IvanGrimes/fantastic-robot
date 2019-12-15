import { Reducer } from 'react';
import {
  DateRangeActions,
  SELECT_TIME,
  SET_AVAILABLE_STEPS,
  SET_MONTH,
  SET_RANGE,
  SET_STEP,
  UPDATE_RESERVATIONS,
  UPDATE_WORK_HOURS,
} from '../actions';
import { CalendarState } from '../types';
import { getInitialState } from './helpers';
import { setRange } from './setRange';
import { setMonth } from './setMonth';
import { selectTime } from './selectTime';
import { setStep } from './setStep';
import { setAvailableSteps } from './setAvailableSteps';
import { updateReservations } from './updateReservations';
import { updateWorkHours } from './updateWorkHours';
// TODO: Когда попадаешь на февраль через previous/next month - становится один день вместо трех
export const initialState: CalendarState = getInitialState({});

export const reducer: Reducer<CalendarState, DateRangeActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_RANGE:
      return setRange(state, action);
    case SET_MONTH:
      return setMonth(state, action);
    case SELECT_TIME:
      return selectTime(state, action);
    case SET_STEP:
      return setStep(state, action);
    case SET_AVAILABLE_STEPS:
      return setAvailableSteps(state, action);
    case UPDATE_RESERVATIONS:
      return updateReservations(state, action);
    case UPDATE_WORK_HOURS:
      return updateWorkHours(state, action);
    default:
      return state;
  }
};
