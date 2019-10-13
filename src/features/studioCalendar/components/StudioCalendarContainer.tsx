import React, { createContext, useReducer } from 'react';
import { mergeDeepLeft } from 'ramda';
import { StudioCalendar } from './StudioCalendar';
import { DeepPartial } from '../../../utils/DeepPartial';

export type StudioCalendarContextType = {} & State;

type State = {};

export const StudioCalendarContext = createContext<StudioCalendarContextType>(
  {} as StudioCalendarContextType
);

const _StudioCalendarContainer = () => {
  const [state] = useReducer<
    (prevState: State, nextState: DeepPartial<State>) => State,
    State
  >(
    (prevState, nextState) =>
      mergeDeepLeft<State, DeepPartial<State>>(prevState, nextState),
    {},
    (arg: any) => arg
  );

  return (
    <StudioCalendarContext.Provider
      value={{
        ...state,
      }}
    >
      <StudioCalendar />
    </StudioCalendarContext.Provider>
  );
};

export const StudioCalendarContainer = _StudioCalendarContainer;
