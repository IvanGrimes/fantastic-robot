import { useCallback, useReducer } from 'react';
import { CalendarState, CalendarHandlers } from './types';
import { reducer } from './reducer';
import * as actions from './actions';
import { getInitialState } from './reducer/helpers';

type Props = {
  workHours: CalendarState['workHours'];
  reservations: CalendarState['reservations'];
};

export const useModel = ({
  workHours,
  reservations,
}: Props): [CalendarState, CalendarHandlers] => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState({ workHours, reservations })
  );
  const setStep: CalendarHandlers['setStep'] = useCallback(
    nextStep => dispatch(actions.setStep(nextStep)),
    []
  );
  const previousRange: CalendarHandlers['previousRange'] = useCallback(
    () => dispatch(actions.setRange('previous')),
    []
  );
  const nextRange: CalendarHandlers['nextRange'] = useCallback(
    () => dispatch(actions.setRange('next')),
    []
  );
  const previousMonth: CalendarHandlers['previousMonth'] = useCallback(
    () => dispatch(actions.setMonth('previous')),
    []
  );
  const nextMonth: CalendarHandlers['nextMonth'] = useCallback(
    () => dispatch(actions.setMonth('next')),
    []
  );
  const selectTime: CalendarHandlers['selectTime'] = useCallback(
    timestamp => dispatch(actions.selectTime(timestamp)),
    []
  );
  const setAvailableSteps: CalendarHandlers['setAvailableSteps'] = useCallback(
    availableSteps => dispatch(actions.setAvailableSteps(availableSteps)),
    []
  );

  return [
    state,
    {
      previousRange,
      nextRange,
      previousMonth,
      nextMonth,
      selectTime,
      setStep,
      setAvailableSteps,
    },
  ];
};