import { useCallback, useReducer } from 'react';
import { DateRangeState, DateRangeHandlers } from './index';
import { getInitialState, reducer } from './reducer';
import * as actions from './actions';

type Props = { reservations: number[] };

export const useModel = ({
  reservations,
}: Props): [DateRangeState, DateRangeHandlers] => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState({ reservations })
  );
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
  const selectTime: DateRangeHandlers['selectTime'] = useCallback(
    timestamp => dispatch(actions.selectTime(timestamp)),
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
