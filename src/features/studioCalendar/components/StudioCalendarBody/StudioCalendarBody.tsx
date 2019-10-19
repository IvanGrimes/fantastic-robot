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
            key={row[0].timestamp}
            data={row}
            selectTime={handleSelectTime}
            select={select}
          />
        ))}
      </table>
    </div>
  );
};
