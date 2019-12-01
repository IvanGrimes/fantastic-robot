import { CalendarState } from './types';

export type SetRangeAction = ReturnType<typeof setRange>;
export type SetMonthAction = ReturnType<typeof setMonth>;
export type SelectTimeAction = ReturnType<typeof selectTime>;
export type SetStepAction = ReturnType<typeof setStep>;
export type SetAvailableStepsAction = ReturnType<typeof setAvailableSteps>;

export type DateRangeActions =
  | SetRangeAction
  | SetMonthAction
  | SelectTimeAction
  | SetStepAction
  | SetAvailableStepsAction;

type Direction = 'previous' | 'next';

export const SET_RANGE = 'SET_RANGE';
export const SET_MONTH = 'SET_MONTH';
export const SELECT_TIME = 'SELECT_TIME';
export const SET_STEP = 'SET_STEP';
export const SET_AVAILABLE_STEPS = 'SET_AVAILABLE_STEPS';

export const setRange = (direction: Direction) =>
  <const>{
    type: SET_RANGE,
    payload: { direction },
  };

export const setMonth = (direction: Direction) =>
  <const>{
    type: SET_MONTH,
    payload: { direction },
  };

export const selectTime = (timestamp: number) =>
  <const>{
    type: SELECT_TIME,
    payload: { timestamp },
  };

export const setStep = (step: CalendarState['step']) =>
  <const>{
    type: SET_STEP,
    payload: { step },
  };

export const setAvailableSteps = (
  availableSteps: Partial<CalendarState['availableSteps']>
) => <const>{ type: SET_AVAILABLE_STEPS, payload: { availableSteps } };
