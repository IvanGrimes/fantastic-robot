import React, { createContext, useCallback, useReducer } from 'react';
import { StudioCalendar } from './StudioCalendar';
import { DeepPartial } from '../../../utils/DeepPartial';
import { DateMonad } from '../utils/DateMonad';

type Handler<T = any> = (...args: T[]) => void;

export type StudioCalendarContextType = {
  toggleStep: Handler;
  previousRange: Handler;
  nextRange: Handler;
  previousMonth: Handler;
  nextMonth: Handler;
} & State;

type State = {
  from: DateMonad;
  to: DateMonad;
  step: 0 | 2;
  timeline: string[];
};

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

const DEFAULT_STEP: State['step'] = 2;

const date = new Date();

const _StudioCalendarContainer = () => {
  const [state, dispatch] = useReducer<
    (prevState: State, nextState: DeepPartial<State>) => State,
    State
  >(
    (prevState, nextState) => ({ ...prevState, ...nextState } as State),
    {
      from: DateMonad.lift(date)
        .setHours(0)
        .setMinutes(0),
      to: DateMonad.lift(date)
        .addDays(DEFAULT_STEP)
        .setMinutes(0),
      step: DEFAULT_STEP,
      timeline: new Array(10)
        .fill(null)
        .map((_item, index) => `${10 + index}:00`),
    },
    (arg: any) => arg
  );
  const toggleStep = useCallback(() => {
    const nextStep = state.step === 0 ? 2 : 0;

    return dispatch({
      step: nextStep,
      to: state.from.addDays(nextStep),
    });
  }, [state.from, state.step]);
  const setRange = useCallback(
    (direction: 'previous' | 'next') => {
      const { step } = state;
      const method = direction === 'previous' ? 'truncateDays' : 'addDays';

      return dispatch({
        from: state.from[method](step),
        to: state.to[method](step),
      });
    },
    [state]
  );
  const previousRange = useCallback(() => setRange('previous'), [setRange]);
  const nextRange = useCallback(() => setRange('next'), [setRange]);
  const previousMonth = useCallback(
    () =>
      dispatch({
        from: state.from.truncateMonths(1),
        to: state.to.truncateMonths(1),
      }),
    [state.from, state.to]
  );
  const nextMonth = useCallback(
    () =>
      dispatch({ from: state.from.addMonths(1), to: state.to.addMonths(1) }),
    [state.from, state.to]
  );

  return (
    <StudioCalendarContext.Provider
      value={{
        toggleStep,
        previousRange,
        nextRange,
        previousMonth,
        nextMonth,
        ...state,
      }}
    >
      <StudioCalendar />
    </StudioCalendarContext.Provider>
  );
};

export const StudioCalendarContainer = _StudioCalendarContainer;
