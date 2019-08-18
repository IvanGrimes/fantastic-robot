import React, { memo } from 'react';
import dequal from 'dequal';
import { Grid } from '@material-ui/core';
import { ChipListProps } from './index';
import { ChipListItem } from './ChipListItem';

const _ChipList = ({
  list,
  selectedListId,
  handleToggle,
  renderName,
  ...props
}: ChipListProps) => (
  <Grid
    component="ul"
    container
    item
    alignItems="center"
    spacing={2}
    {...props}
  >
    {list.map(item => (
      <ChipListItem
        key={item.id}
        {...item}
        handleToggle={() => handleToggle(item.id)}
        isActive={selectedListId.includes(item.id)}
        renderName={renderName}
      />
    ))}
  </Grid>
);

export const ChipList = memo(_ChipList, dequal);
