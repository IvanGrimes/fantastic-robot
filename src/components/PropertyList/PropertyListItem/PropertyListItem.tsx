import React, { memo } from 'react';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import { PropertyListItemProps } from './index';

const _PropertyListItem = ({
  id,
  name,
  onChange,
  isActive,
  renderValue,
  ...props
}: PropertyListItemProps) => (
  <Grid container justify="space-between" alignItems="center" spacing={2}>
    <Grid item>
      {renderValue ? (
        renderValue({ id, name, isActive, ...props })
      ) : (
        <Typography>{name}</Typography>
      )}
    </Grid>
    <Grid item>
      <Checkbox onChange={onChange([id])} checked={isActive} />
    </Grid>
  </Grid>
);

export const PropertyListItem = memo(_PropertyListItem);
