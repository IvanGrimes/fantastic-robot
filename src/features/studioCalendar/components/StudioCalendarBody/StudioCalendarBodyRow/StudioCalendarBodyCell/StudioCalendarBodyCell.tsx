import React from 'react';
import { Cell } from './StudioCalendarBodyCell.styles';

type StudioCalendarBodyCellProps = {
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
      color?: string;
    };
  };
  selectTime: (timestamp: number) => () => void;
};

export const StudioCalendarBodyCell = ({
  data,
  selectTime,
}: StudioCalendarBodyCellProps) => {
  return (
    <Cell
      selected={data.selected}
      onClick={
        data.reservation.canReserve && data.isWorkingHours
          ? selectTime(data.timestamp)
          : undefined
      }
      workingHour={data.isWorkingHours}
      reserved={data.reservation.reserved}
    >
      {data.timestamp}
    </Cell>
  );
};
