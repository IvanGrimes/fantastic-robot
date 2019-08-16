import React, { memo } from 'react';
import { FilterPropertyListItemProps } from './index';
import { Checkbox, Grid, Typography } from '@material-ui/core';

const _FilterPropertyListItem = ({
  id,
  name,
  onChange,
  isActive,
  renderName,
  ...props
}: FilterPropertyListItemProps) => (
  <Grid container justify="space-between" alignItems="center">
    <Grid item>
      {renderName ? (
        renderName({ id, name, isActive, ...props })
      ) : (
        <Typography>{name}</Typography>
      )}
    </Grid>
    <Grid item>
      <Checkbox
        onChange={onChange(isActive ? undefined : id)}
        checked={isActive}
      />
    </Grid>
  </Grid>
);

export const FilterPropertyListItem = memo(_FilterPropertyListItem);
