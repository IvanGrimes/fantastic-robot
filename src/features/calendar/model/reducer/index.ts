import { Reducer } from 'react';
import {
  DateRangeActions,
  SELECT_TIME,
  SET_MONTH,
  SET_RANGE,
  TOGGLE_STEP,
} from '../actions';
import { CalendarState } from '../types';
import { getInitialState } from './helpers';
import { toggleStep } from './toggleStep';
import { setRange } from './setRange';
import { setMonth } from './setMonth';
import { selectTime } from './selectTime';

export const initialState: CalendarState = getInitialState({});

export const reducer: Reducer<CalendarState, DateRangeActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_STEP:
      return toggleStep(state);
    case SET_RANGE:
      return setRange(state, action);
    case SET_MONTH:
      return setMonth(state, action);
    case SELECT_TIME:
      return selectTime(state, action);
    default:
      return state;
  }
};
