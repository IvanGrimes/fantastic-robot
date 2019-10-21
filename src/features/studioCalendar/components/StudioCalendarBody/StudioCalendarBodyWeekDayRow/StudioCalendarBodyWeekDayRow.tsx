import React from 'react';
import { format } from 'date-fns';

type Props = {
  range: number[];
};

export const StudioCalendarBodyWeekDayRow = ({ range }: Props) => (
  <tr>
    <td key={0} />
    {range.map(date => (
      <td key={date}>{format(date, 'dd, DD')}</td>
    ))}
  </tr>
);
