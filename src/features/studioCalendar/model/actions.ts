export type Actions =
  | ReturnType<typeof toggleStep>
  | ReturnType<typeof setViewRange>
  | ReturnType<typeof setMonth>;

type Direction = 'previous' | 'next';

export const TOGGLE_STEP = 'TOGGLE_STEP';
export const SET_VIEW_RANGE = 'SET_VIEW_RANGE';
export const SET_MONTH = 'SET_MONTH';

export const toggleStep = () =>
  <const>{
    type: TOGGLE_STEP,
  };

export const setViewRange = (direction: Direction) =>
  <const>{
    type: SET_VIEW_RANGE,
    payload: { direction },
  };

export const setMonth = (direction: Direction) =>
  <const>{
    type: SET_MONTH,
    payload: { direction },
  };
