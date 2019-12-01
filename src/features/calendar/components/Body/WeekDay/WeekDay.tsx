import React from 'react';
import { format } from 'date-fns';
import { Typography } from '@material-ui/core';
import { Row, Cell } from './WeekDay.styles';

type Props = {
  range: number[];
};

export const WeekDay = ({ range }: Props) => (
  <Row>
    {range.map(date => (
      <Cell key={date}>
        <Typography variant="overline">{format(date, 'dd, EEEE')}</Typography>
      </Cell>
    ))}
  </Row>
);
