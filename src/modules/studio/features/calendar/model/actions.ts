import { CalendarState } from './types';

export type SetRangeAction = ReturnType<typeof setRange>;
export type SetMonthAction = ReturnType<typeof setMonth>;
export type SelectTimeAction = ReturnType<typeof selectTime>;
export type SetStepAction = ReturnType<typeof setStep>;
export type SetAvailableStepsAction = ReturnType<typeof setAvailableSteps>;
export type UpdateReservationsAction = ReturnType<typeof updateReservations>;
export type UpdateWorkHoursAction = ReturnType<typeof updateWorkHours>;
export type ClearSelectedTime = ReturnType<typeof clearSelectedTime>;

export type DateRangeActions =
  | SetRangeAction
  | SetMonthAction
  | SelectTimeAction
  | SetStepAction
  | SetAvailableStepsAction
  | UpdateReservationsAction
  | UpdateWorkHoursAction
  | ClearSelectedTime;

export type Direction = 'previous' | 'next';

export const SET_RANGE = 'SET_RANGE';
export const SET_MONTH = 'SET_MONTH';
export const SELECT_TIME = 'SELECT_TIME';
export const SET_STEP = 'SET_STEP';
export const SET_AVAILABLE_STEPS = 'SET_AVAILABLE_STEPS';
export const UPDATE_RESERVATIONS = 'UPDATE_RESERVATIONS';
export const UPDATE_WORK_HOURS = 'UPDATE_WORK_HOURS';
export const CLEAR_SELECTED_TIME = 'CLEAR_SELECTED_TIME';

export const setRange = (payload: {
  direction: Direction;
  step?: CalendarState['step'];
}) =>
  <const>{
    type: SET_RANGE,
    payload,
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

export const updateReservations = (
  reservations: CalendarState['reservations']
) => <const>{ type: UPDATE_RESERVATIONS, payload: { reservations } };

export const updateWorkHours = (workHours: CalendarState['workHours']) =>
  <const>{ type: UPDATE_WORK_HOURS, payload: { workHours } };

export const clearSelectedTime = () => <const>{ type: CLEAR_SELECTED_TIME };
