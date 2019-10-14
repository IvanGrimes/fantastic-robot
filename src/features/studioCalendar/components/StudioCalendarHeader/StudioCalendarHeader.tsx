import React, { useContext } from 'react';
import { StudioCalendarContext } from '../StudioCalendarContainer';

export const StudioCalendarHeader = () => {
  const { previousRange, nextRange, from, to, step, toggleStep } = useContext(
    StudioCalendarContext
  );

  return (
    <div>
      <button type="button" onClick={toggleStep}>
        {step === 1 ? '3 дня' : '1 день'}
      </button>
      <button type="button" onClick={previousRange}>
        prev
      </button>
      {step === 1 ? from.toString() : `${from} --- ${to}`}
      <button type="button" onClick={nextRange}>
        next
      </button>
    </div>
  );
};
