import React, { createContext, useCallback, useReducer } from 'react';
import { mergeDeepRight } from 'ramda';
import { StudioCalendar } from './StudioCalendar';
import { DeepPartial } from '../../../utils/DeepPartial';
import { DateMonad } from '../utils/DateHandler';

type Handler<T = any> = (...args: T[]) => void;

export type StudioCalendarContextType = {
  toggleStep: Handler;
  previousRange: Handler;
  nextRange: Handler;
} & State;

type State = {
  from: DateMonad;
  to: DateMonad;
  step: 1 | 3;
};

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

const DEFAULT_STEP: State['step'] = 3;

const date = new Date();

const _StudioCalendarContainer = () => {
  const [state, dispatch] = useReducer<
    (prevState: State, nextState: DeepPartial<State>) => State,
    State
  >(
    (prevState, nextState) =>
      mergeDeepRight<State, DeepPartial<State>>(prevState, nextState) as State,
    {
      from: DateMonad.lift(date),
      to: DateMonad.lift(date).addDays(DEFAULT_STEP),
      step: DEFAULT_STEP,
    },
    (arg: any) => arg
  );
  const toggleStep = useCallback(() => {
    const nextStep = state.step === 1 ? 3 : 1;

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

  return (
    <StudioCalendarContext.Provider
      value={{
        toggleStep,
        previousRange,
        nextRange,
        ...state,
      }}
    >
      <StudioCalendar />
    </StudioCalendarContext.Provider>
  );
};

export const StudioCalendarContainer = _StudioCalendarContainer;
