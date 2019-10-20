import React from 'react';
import { getDay } from 'date-fns';

type Props = {
  range: number[];
};

const weekDay = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export const StudioCalendarBodyWeekDayRow = ({ range }: Props) => (
  <tr>
    <td key={0} />
    {range.map(date => (
      <td key={date}>{weekDay[getDay(date)]}</td>
    ))}
  </tr>
);
