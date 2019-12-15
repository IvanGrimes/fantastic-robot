import React from 'react';
import { Typography } from '@material-ui/core';
import { Station as StyledStation } from './Station.styles';

export type StationProps = {
  className?: string;
  color: string;
  value: string;
};

export const Station = ({ className = '', color, value }: StationProps) => (
  <StyledStation className={className} color={color}>
    <Typography component="span" variant="caption">
      {value}
    </Typography>
  </StyledStation>
);
