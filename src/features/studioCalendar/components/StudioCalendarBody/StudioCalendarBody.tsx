import React, { useCallback, useContext } from 'react';
import { StudioCalendarContext } from '../StudioCalendarContainer';
import { StudioCalendarBodyRow } from './StudioCalendarBodyRow';
import { StudioCalendarBodyWeekDayRow } from './StudioCalendarBodyWeekDayRow';

export const StudioCalendarBody = () => {
  const { grid, selectTime, select, range } = useContext(StudioCalendarContext);
  const handleSelectTime = useCallback(
    (timestamp: number) => () => selectTime(timestamp),
    [selectTime]
  );

  return (
    <div>
      <table>
        <StudioCalendarBodyWeekDayRow range={range} />
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
