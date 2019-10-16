import { useCallback, useReducer } from 'react';
import { DateRangeState, DateRangeHandlers } from './index';
import { initialState, reducer } from './reducer';
import * as actions from './actions';

export const useModel = (): [DateRangeState, DateRangeHandlers] => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleStep = useCallback(() => dispatch(actions.toggleStep()), []);
  const previousViewRange = useCallback(
    () => dispatch(actions.setViewRange('previous')),
    []
  );
  const nextViewRange = useCallback(
    () => dispatch(actions.setViewRange('next')),
    []
  );
  const previousMonth = useCallback(
    () => dispatch(actions.setMonth('previous')),
    []
  );
  const nextMonth = useCallback(() => dispatch(actions.setMonth('next')), []);
  const selectTime = useCallback(
    (timestamp: number) => dispatch(actions.selectTime(timestamp)),
    []
  );

  return [
    state,
    {
      toggleStep,
      previousViewRange,
      nextViewRange,
      previousMonth,
      nextMonth,
      selectTime,
    },
  ];
};
