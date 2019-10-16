import React, { useContext } from 'react';
import { StudioCalendarContext } from '../StudioCalendarContainer';
import { StudioCalendarBodyRow } from './StudioCalendarBodyRow';

export const StudioCalendarBody = () => {
  const { grid } = useContext(StudioCalendarContext);

  return (
    <div>
      <table>
        {grid.map(row => (
          <StudioCalendarBodyRow data={row} />
        ))}
      </table>
    </div>
  );
};
