import React from 'react';
import { Chip, Grid } from '@material-ui/core';
import { ChipListItemProps } from './index';

export const ChipListItem = ({
  handleToggle,
  id,
  isActive,
  name,
  renderName,
  ...props
}: ChipListItemProps) => (
  <Grid item>
    <Chip
      label={
        renderName
          ? renderName({ handleToggle, id, isActive, name, ...props })
          : name
      }
      component="button"
      type="button"
      onClick={isActive ? undefined : handleToggle}
      onDelete={isActive ? handleToggle : undefined}
    />
  </Grid>
);
