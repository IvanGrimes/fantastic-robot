import React from 'react';
import { Row as StyledRow } from './Row.styles';
import { Cell } from './Cell';

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
  }[];
  selectTime: (timestamp: number) => () => void;
};

export const Row = ({ data, selectTime }: Props) => {
  return (
    <StyledRow>
      {data.map(item => (
        <Cell key={item.timestamp} data={item} selectTime={selectTime} />
      ))}
    </StyledRow>
  );
};
