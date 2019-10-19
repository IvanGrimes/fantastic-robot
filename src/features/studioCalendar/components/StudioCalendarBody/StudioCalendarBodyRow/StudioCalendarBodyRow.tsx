import React from 'react';
import { StudioCalendarBodyCell } from './StudioCalendarBodyCell';

// TODO: Make better type reuse from model
// TODO: Make timestamp literal type

type StudioCalendarBodyRowProps = {
  data: {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    timestamp: number;
    canReserve: boolean;
    reserved: boolean;
  }[];
  selectTime: (timestamp: number) => () => void;
  select: number[];
};

export const StudioCalendarBodyRow = ({
  data,
  selectTime,
  select,
}: StudioCalendarBodyRowProps) => {
  return (
    <tr>
      <td key={0}>{`${data[0].hours}:${data[0].minutes}0`}</td>
      {data.map(item => (
        <StudioCalendarBodyCell
          key={item.timestamp}
          data={item}
          selectTime={selectTime}
          selected={select.includes(item.timestamp)}
        />
      ))}
    </tr>
  );
};
