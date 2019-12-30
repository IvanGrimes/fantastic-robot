import React from 'react';
import { Typography } from '@material-ui/core';
import { Cell as StyledCell, ColorGroup } from './Cell.styles';
import { useCalendar } from '../../../CalendarContext';

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

export const Cell = ({ data, selectTime }: Props) => {
  const { step } = useCalendar();
  const canSelect = data.reservation.canReserve && data.isWorkingHours;

  return (
    <StyledCell
      selected={data.selected}
      onClick={canSelect ? selectTime(data.timestamp) : undefined}
      workingHour={data.isWorkingHours}
      highlightReserve={Boolean(
        data.reservation.reserved && !data.reservation.color
      )}
      canSelect={canSelect}
      columns={step + 1}
    >
      <Typography variant="caption">
        {`${data.hours}:${data.minutes}0`}
        {data.reservation.reserved && data.reservation.color
          ? data.reservation.color.map((color, index) => (
              <ColorGroup
                key={color}
                offsetMultiplier={index ? index + 1 : index}
                color={color}
              />
            ))
          : null}
      </Typography>
    </StyledCell>
  );
};
