import { useCallback, useEffect, useReducer } from 'react';
import { CalendarState, CalendarHandlers } from './types';
import { reducer } from './reducer';
import * as actions from './actions';
import { getInitialState } from './reducer/helpers';
import { Step } from '../model/types';

type Props = {
  workHours: CalendarState['workHours'];
  reservations: CalendarState['reservations'];
  fixedStep?: Step;
  multipleSelect: boolean;
};

export const useModel = ({
  workHours,
  reservations,
  fixedStep,
  multipleSelect,
}: Props): [CalendarState, CalendarHandlers] => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState({ workHours, reservations, fixedStep, multipleSelect })
  );
  const setStep: CalendarHandlers['setStep'] = useCallback(
    nextStep => dispatch(actions.setStep(nextStep)),
    []
  );
  const previousRange: CalendarHandlers['previousRange'] = useCallback(
    () => dispatch(actions.setRange({ direction: 'previous' })),
    []
  );
  const setRange: CalendarHandlers['setRange'] = useCallback(
    payload => dispatch(actions.setRange(payload)),
    []
  );
  const nextRange: CalendarHandlers['nextRange'] = useCallback(
    () => dispatch(actions.setRange({ direction: 'next' })),
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
  const clearSelectedTime: CalendarHandlers['clearSelectedTime'] = useCallback(
    () => dispatch(actions.clearSelectedTime()),
    []
  );

  useEffect(() => {
    dispatch(actions.updateReservations(reservations));
  }, [reservations]);

  useEffect(() => {
    dispatch(actions.updateWorkHours(workHours));
  }, [workHours]);

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
      clearSelectedTime,
      setRange,
    },
  ];
};
