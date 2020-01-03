import React, { useCallback, MouseEvent, TouchEvent } from 'react';
import { useBrowser } from '@hooks/useBrowser';
import { useCalendar } from '../CalendarContext';
import { Table } from './Body.styles';
import { BodySkeleton } from './BodySkeleton';
import { useInjections } from '../calendarInjector';

const handlePreventDefault = (
  ev: MouseEvent<HTMLTableElement> | TouchEvent<HTMLTableElement>
) => {
  ev.preventDefault();
};

export const Body = () => {
  const { WeekDay, Row } = useInjections();
  const isBrowser = useBrowser();
  const { grid, selectTime, range } = useCalendar();
  const handleSelectTime = useCallback(
    (timestamp: number) => () => selectTime(timestamp),
    [selectTime]
  );

  if (!isBrowser) {
    return <BodySkeleton />;
  }

  return (
    <>
      <Table
        onMouseMove={handlePreventDefault}
        onTouchMove={handlePreventDefault}
      >
        <WeekDay range={range} />
        <tbody>
          {grid.map(row => (
            <Row
              key={row[0].timestamp}
              data={row}
              selectTime={handleSelectTime}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};
