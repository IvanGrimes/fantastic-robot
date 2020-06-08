import React from 'react';
import { MetroServiceProps, SuccessComponent } from '@model';
import { VirtualizedList } from '@components';
import { ListProps } from './types';
import { ListItem } from './ListItem';

export const List: SuccessComponent<MetroServiceProps, ListProps> = ({
  service,
  values,
  onChange,
}) => {
  const list = service.data.getData();

  return (
    <VirtualizedList
      style={{ marginLeft: '-12px' }}
      itemSize={48}
      height={350}
      width="calc(100% + 12px)"
      itemCount={list.length}
      itemData={{
        list,
        values,
        onChange,
      }}
    >
      {ListItem}
    </VirtualizedList>
  );
};
