import React from 'react';
import { Chip, Grid } from '@material-ui/core';
import { ChipListItemProps } from './index';

export const ChipListItem = ({
  handleToggle,
  id,
  isActive,
  value,
  renderValue,
  ...props
}: ChipListItemProps) => (
  <Grid item>
    <Chip
      label={
        renderValue
          ? renderValue({ handleToggle, id, isActive, value, ...props })
          : value
      }
      component="button"
      type="button"
      onClick={isActive ? undefined : handleToggle}
      onDelete={isActive ? handleToggle : undefined}
    />
  </Grid>
);
