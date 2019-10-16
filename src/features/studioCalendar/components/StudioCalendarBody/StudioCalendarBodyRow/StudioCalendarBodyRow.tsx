import React from 'react';

type StudioCalendarBodyRowProps = {
  data: {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
  }[];
};

export const StudioCalendarBodyRow = ({ data }: StudioCalendarBodyRowProps) => {
  return (
    <tr>
      <td key={0}>{`${data[0].hours}:${data[0].minutes}0`}</td>
      {data.map(item => (
        <td key={item.day + item.hours}>
          {item.day}/{item.hours}:{item.minutes}
        </td>
      ))}
    </tr>
  );
};
