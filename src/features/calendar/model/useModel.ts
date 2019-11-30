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
  const setStep = useCallback(
    (nextStep: CalendarState['step']) => dispatch(actions.setStep(nextStep)),
    []
  );
  const previousRange = useCallback(
    () => dispatch(actions.setRange('previous')),
    []
  );
  const nextRange = useCallback(() => dispatch(actions.setRange('next')), []);
  const previousMonth = useCallback(
    () => dispatch(actions.setMonth('previous')),
    []
  );
  const nextMonth = useCallback(() => dispatch(actions.setMonth('next')), []);
  const selectTime: CalendarHandlers['selectTime'] = useCallback(
    timestamp => dispatch(actions.selectTime(timestamp)),
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
    },
  ];
};
