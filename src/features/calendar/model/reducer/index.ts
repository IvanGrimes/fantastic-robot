import { Reducer } from 'react';
import {
  DateRangeActions,
  SELECT_TIME,
  SET_MONTH,
  SET_RANGE,
  SET_STEP,
} from '../actions';
import { CalendarState } from '../types';
import { getInitialState } from './helpers';
import { setRange } from './setRange';
import { setMonth } from './setMonth';
import { selectTime } from './selectTime';
import { setStep } from './setStep';
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
    default:
      return state;
  }
};
