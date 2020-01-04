import React, { useCallback } from 'react';
import {
  RangeNavigation as DefaultRangeNavigation,
  useCalendar,
} from '@modules/studio/features/calendar';

export const RangeNavigation = () => {
  const { setRange } = useCalendar();
  const handlePreviousRange = useCallback(() => {
    setRange({ direction: 'previous', step: 0 });
  }, [setRange]);
  const handleNextRange = useCallback(() => {
    setRange({ direction: 'next', step: 0 });
  }, [setRange]);

  return (
    <DefaultRangeNavigation
      onPreviousRange={handlePreviousRange}
      onNextRange={handleNextRange}
    />
  );
};
