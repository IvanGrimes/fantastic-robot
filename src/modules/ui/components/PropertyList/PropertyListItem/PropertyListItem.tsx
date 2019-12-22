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
    <Grid
      container
      justify="space-between"
      alignItems="center"
      spacing={2}
      style={style}
    >
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
  );
};

export const PropertyListItem = memo(_PropertyListItem);
