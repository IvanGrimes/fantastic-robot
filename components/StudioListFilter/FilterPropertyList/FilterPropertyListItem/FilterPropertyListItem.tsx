import React, { memo } from 'react';
import { FilterPropertyListItemProps } from './index';
import { Checkbox, Grid, Typography } from '@material-ui/core';

const _FilterPropertyListItem = ({
  id,
  name,
  onChange,
  isActive,
}: FilterPropertyListItemProps) => (
  <Grid container justify="space-between" alignItems="center">
    <Grid item>
      <Typography>{name}</Typography>
    </Grid>
    <Grid item>
      <Checkbox
        onChange={onChange(isActive ? undefined : id)}
        value={isActive}
      />
    </Grid>
  </Grid>
);

export const FilterPropertyListItem = memo(_FilterPropertyListItem);
