import React from 'react';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns';
import { Wrapper, Label, Icon } from './Input.styles';

export type InputProps = {
  isFromActive: boolean;
  isToActive: boolean;
  fromDate?: number;
  toDate?: number;
  onClick: () => void;
};

const formatDate = (date?: number) => {
  if (typeof date === 'number') {
    return format(date, 'dd/MM/yyyy HH:mm');
  }

  return date;
};

export const Input = ({
  isFromActive,
  isToActive,
  fromDate,
  toDate,
  onClick,
}: InputProps) => (
  <Wrapper onClick={onClick}>
    <Label isActive={isFromActive}>
      <Typography variant="caption">
        {formatDate(fromDate) || 'Начало'}
      </Typography>
    </Label>
    <Icon />
    <Label isActive={isToActive}>
      <Typography variant="caption">{formatDate(toDate) || 'Конец'}</Typography>
    </Label>
  </Wrapper>
);
