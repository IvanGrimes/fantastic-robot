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
    isWorkingHours: boolean;
    selected: boolean;
    reservation: {
      id?: string;
      reserved: boolean;
      canReserve: boolean;
      color?: string[];
    };
  }[];
  selectTime: (timestamp: number) => () => void;
};

export const StudioCalendarBodyRow = ({
  data,
  selectTime,
}: StudioCalendarBodyRowProps) => {
  return (
    <tr>
      <td key={0}>{`${data[0].hours}:${data[0].minutes}0`}</td>
      {data.map(item => (
        <StudioCalendarBodyCell
          key={item.timestamp}
          data={item}
          selectTime={selectTime}
        />
      ))}
    </tr>
  );
};
