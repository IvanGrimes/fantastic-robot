import React from 'react';
import { getDate } from 'date-fns';
import * as calendar from '../../../../../calendar';

const { useCalendarInjections, useCalendar, StyledRow } = calendar

export const Row = ({ data, selectTime }: calendar.RowProps) => {
  const { Cell } = useCalendarInjections();
  const { from } = useCalendar();
  const fromDay = getDate(from);

  return (
    <StyledRow>
      {data.map(item =>
        item.day === fromDay ? (
          <Cell key={item.timestamp} data={item} selectTime={selectTime} />
        ) : null
      )}
    </StyledRow>
  );
};
