import React from 'react';
import { Cell, ColorGroup } from './CalendarCell.styles';

type Props = {
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
  };
  selectTime: (timestamp: number) => () => void;
};

export const CalendarCell = ({
  data,
  selectTime,
}: Props) => {
  console.log(data.reservation.reserved, data.reservation.color);
  return (
    <Cell
      selected={data.selected}
      onClick={
        data.reservation.canReserve && data.isWorkingHours
          ? selectTime(data.timestamp)
          : undefined
      }
      workingHour={data.isWorkingHours}
      highlightReserve={Boolean(
        data.reservation.reserved && !data.reservation.color
      )}
    >
      {data.timestamp}
      {data.reservation.reserved && data.reservation.color
        ? data.reservation.color.map((color, index) => (
            <ColorGroup
              key={color}
              offsetMultiplier={index ? index + 1 : index}
              color={color}
            />
          ))
        : null}
    </Cell>
  );
};
