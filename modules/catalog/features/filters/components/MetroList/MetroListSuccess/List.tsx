import React, { FunctionComponent } from 'react';
import { VirtualizedList } from '@components';
import { ListItem } from './ListItem';
import { listItemPadding, maxHeight } from '../../ParameterList';
import { MetroListProps } from '../types';

export const List: FunctionComponent<MetroListProps> = ({
  values,
  onChange,
  list,
}) => {
  const listData = list;

  return (
    <VirtualizedList
      style={{ marginLeft: `-${listItemPadding}` }}
      itemSize={48}
      height={maxHeight - 15}
      width={`calc(100% + ${listItemPadding})`}
      itemCount={listData.length}
      itemData={{
        list: listData,
        values,
        onChange,
      }}
    >
      {ListItem}
    </VirtualizedList>
  );
};
