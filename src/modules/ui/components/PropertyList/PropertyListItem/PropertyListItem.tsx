import React, { memo } from 'react';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import { PropertyListItemProps } from './index';

const _PropertyListItem = ({
  index,
  style,
  data: { onChange, renderValue, list, selectedIds },
}: PropertyListItemProps) => {
  const item = list[index];
  const isActive = selectedIds.includes(item.id);

  return (
    <div style={style}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          {renderValue ? (
            renderValue({ ...item, isActive })
          ) : (
            <Typography>{item.value}</Typography>
          )}
        </Grid>
        <Grid item>
          <Checkbox onChange={onChange([item.id])} checked={isActive} />
        </Grid>
      </Grid>
    </div>
  );
};

export const PropertyListItem = memo(_PropertyListItem);
