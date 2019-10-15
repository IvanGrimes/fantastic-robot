import React, { useContext } from 'react';
import { StudioCalendarContext } from '../StudioCalendarContainer';

export const StudioCalendarHeader = () => {
  const {
    previousRange,
    nextRange,
    from,
    to,
    step,
    toggleStep,
    previousMonth,
    nextMonth,
  } = useContext(StudioCalendarContext);

  return (
    <div>
      <button type="button" onClick={toggleStep}>
        {step === 0 ? '3 дня' : '1 день'}
      </button>
      <button type="button" onClick={previousMonth}>
        previous month
      </button>
      <button type="button" onClick={previousRange}>
        previous range
      </button>
      {step === 0 ? from.toString() : `${from} --- ${to}`}
      <button type="button" onClick={nextRange}>
        next range
      </button>
      <button type="button" onClick={nextMonth}>
        next month
      </button>
    </div>
  );
};
