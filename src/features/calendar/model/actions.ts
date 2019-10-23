export type ToggleStepAction = ReturnType<typeof toggleStep>;
export type SetRangeAction = ReturnType<typeof setRange>;
export type SetMonthAction = ReturnType<typeof setMonth>;
export type SelectTimeAction = ReturnType<typeof selectTime>;

export type DateRangeActions =
  | ToggleStepAction
  | SetRangeAction
  | SetMonthAction
  | SelectTimeAction;

type Direction = 'previous' | 'next';

export const TOGGLE_STEP = 'TOGGLE_STEP';
export const SET_RANGE = 'SET_RANGE';
export const SET_MONTH = 'SET_MONTH';
export const SELECT_TIME = 'SELECT_TIME';

export const toggleStep = () =>
  <const>{
    type: TOGGLE_STEP,
  };

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
