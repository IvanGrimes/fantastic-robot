import { useCallback, useReducer } from 'react';
import { DateRangeState, DateRangeHandlers } from './index';
import { getInitialState, reducer } from './reducer';
import * as actions from './actions';

type Props = {
  workHours: DateRangeState['workHours'];
  reservations: DateRangeState['reservations'];
};

export const useModel = ({
  workHours,
  reservations,
}: Props): [DateRangeState, DateRangeHandlers] => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState({ workHours, reservations })
  );
  const toggleStep = useCallback(() => dispatch(actions.toggleStep()), []);
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
  const selectTime: DateRangeHandlers['selectTime'] = useCallback(
    timestamp => dispatch(actions.selectTime(timestamp)),
    []
  );

  return [
    state,
    {
      toggleStep,
      previousRange,
      nextRange,
      previousMonth,
      nextMonth,
      selectTime,
    },
  ];
};
