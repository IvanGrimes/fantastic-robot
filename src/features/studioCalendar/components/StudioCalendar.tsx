import React, { useContext } from 'react';
import { StudioCalendarHeader } from './StudioCalendarHeader';
import { StudioCalendarBody } from './StudioCalendarBody';
import { StudioCalendarContext } from './StudioCalendarContainer';

export const StudioCalendar = () => {
  const context = useContext(StudioCalendarContext);

  console.log(context);

  return (
    <div>
      <StudioCalendarHeader />
      <StudioCalendarBody />
    </div>
  );
};
