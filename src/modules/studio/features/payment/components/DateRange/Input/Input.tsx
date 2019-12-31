import React from 'react';
import { Typography } from '@material-ui/core';
import { Wrapper, Label, Icon } from './Input.styles';

export type InputProps = {
  isFromActive: boolean;
  isToActive: boolean;
  fromDate?: string;
  toDate?: string;
  onClick: () => void;
};

export const Input = ({
  isFromActive,
  isToActive,
  fromDate = '',
  toDate = '',
  onClick,
}: InputProps) => (
  <Wrapper onClick={onClick}>
    <Label isActive={isFromActive}>
      <Typography variant="caption">{fromDate || 'Начало'}</Typography>
    </Label>
    <Icon />
    <Label isActive={isToActive}>
      <Typography variant="caption">{toDate || 'Конец'}</Typography>
    </Label>
  </Wrapper>
);
