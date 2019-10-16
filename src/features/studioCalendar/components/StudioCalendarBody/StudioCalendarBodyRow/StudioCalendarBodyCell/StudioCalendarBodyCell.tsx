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
  };
  selectTime: (timestamp: number) => () => void;
  selected: boolean;
};

export const StudioCalendarBodyCell = ({
  data,
  selectTime,
  selected,
}: StudioCalendarBodyCellProps) => {
  return (
    <Cell selected={selected} onClick={selectTime(data.timestamp)}>
      {data.timestamp}
    </Cell>
  );
};
