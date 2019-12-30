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
}: InputProps) => {
  return (
    <Wrapper>
      <Label isActive={isFromActive} onClick={onClick}>
        <Typography variant="caption">{fromDate || 'Начало'}</Typography>
      </Label>
      <Icon />
      <Label isActive={isToActive} onClick={onClick}>
        <Typography variant="caption">{toDate || 'Конец'}</Typography>
      </Label>
    </Wrapper>
  );
};
