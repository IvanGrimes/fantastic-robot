import React, { useCallback, useContext } from 'react';
import { StudioCalendarContext } from '../StudioCalendarContainer';
import { StudioCalendarBodyRow } from './StudioCalendarBodyRow';

export const StudioCalendarBody = () => {
  const { grid, selectTime, select } = useContext(StudioCalendarContext);
  const handleSelectTime = useCallback(
    (timestamp: number) => () => selectTime(timestamp),
    [selectTime]
  );

  return (
    <div>
      <table>
        {grid.map(row => (
          <StudioCalendarBodyRow
            data={row}
            selectTime={handleSelectTime}
            select={select}
          />
        ))}
      </table>
    </div>
  );
};
