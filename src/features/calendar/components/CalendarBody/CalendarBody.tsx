import React, { useCallback, useContext } from 'react';
import { CalendarContext } from '../CalendarContainer';
import { CalendarRow } from './CalendarRow';
import { CalendarWeekDay } from './CalendarWeekDay';

export const CalendarBody = () => {
  const { grid, selectTime, range } = useContext(CalendarContext);
  const handleSelectTime = useCallback(
    (timestamp: number) => () => selectTime(timestamp),
    [selectTime]
  );

  return (
    <div>
      <table>
        <CalendarWeekDay range={range} />
        {grid.map(row => (
          <CalendarRow
            key={row[0].timestamp}
            data={row}
            selectTime={handleSelectTime}
          />
        ))}
      </table>
    </div>
  );
};
