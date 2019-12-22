import React from 'react';
import { Typography } from '@material-ui/core';
import { getSize } from '@modules/studio/utils/size';
import { Station as StyledStation } from './Station.styles';

export type StationProps = {
  className?: string;
  color: string;
  value: string;
  size: ReturnType<typeof getSize>
};

export const Station = ({ className = '', color, value, size }: StationProps) => (
  <StyledStation className={className} color={color}>
    <Typography component="span" variant={size}>
      {value}
    </Typography>
  </StyledStation>
);
