export type Actions =
  | ReturnType<typeof toggleStep>
  | ReturnType<typeof setViewRange>
  | ReturnType<typeof setMonth>
  | ReturnType<typeof selectTime>;

type Direction = 'previous' | 'next';

export const TOGGLE_STEP = 'TOGGLE_STEP';
export const SET_RANGE = 'SET_RANGE';
export const SET_MONTH = 'SET_MONTH';
export const SELECT_TIME = 'SELECT_TIME';

export const toggleStep = () =>
  <const>{
    type: TOGGLE_STEP,
  };

export const setViewRange = (direction: Direction) =>
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
