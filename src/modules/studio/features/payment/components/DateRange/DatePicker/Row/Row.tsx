import React from 'react';
import {
  RowProps,
  StyledRow,
  useCalendar,
  useCalendarInjections,
} from '@modules/studio/features/calendar';
import { getDate } from 'date-fns';

export const Row = ({ data, selectTime }: RowProps) => {
  const { Cell } = useCalendarInjections();
  const { from } = useCalendar();
  const fromDay = getDate(from) + 1;

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
