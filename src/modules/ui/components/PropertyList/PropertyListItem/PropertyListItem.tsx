import React, { memo } from 'react';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import { PropertyListItemProps } from './index';
import { ClickableGrid } from './PropertyListItem.styles';

const _PropertyListItem = ({
  index,
  style,
  data: { onChange, renderValue, list, selectedIds },
}: PropertyListItemProps) => {
  const item = list[index];
  const isActive = selectedIds.includes(item.id);

  return (
    <div style={style}>
      <ClickableGrid
        container
        justify="space-between"
        alignItems="center"
        onClick={onChange([item.id])}
      >
        <Grid item>
          {renderValue ? (
            renderValue({ ...item, isActive })
          ) : (
            <Typography>{item.value}</Typography>
          )}
        </Grid>
        <Grid item>
          <Checkbox checked={isActive} />
        </Grid>
      </ClickableGrid>
    </div>
  );
};

export const PropertyListItem = memo(_PropertyListItem);
