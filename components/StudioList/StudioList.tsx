import React, { memo } from 'react';
import { StudioListProps } from './index';
import { StudioListItem } from './StudioListItem';
import { ListGrid, ListItemGrid } from './StudioList.styles';

const _StudioList = ({ error, list }: StudioListProps) => {
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ListGrid component="ul" container>
      {list.map(item => (
        <ListItemGrid key={item.id} component="li" item xs={12}>
          <StudioListItem {...item} />
        </ListItemGrid>
      ))}
    </ListGrid>
  );
};

export const StudioList = memo(_StudioList);
