import React from 'react';
import { MetroServiceProps, SuccessComponent } from '@model';
import { VirtualizedList } from '@components';
import { ListProps } from './types';
import { ListItem } from './ListItem';
import { ParameterList, listItemPadding, maxHeight } from '../../ParameterList';

export const List: SuccessComponent<MetroServiceProps, ListProps> = ({
  service,
  values,
  onChange,
}) => {
  const list = service.data.getData();

  return (
    <ParameterList title="Список метро">
      <VirtualizedList
        style={{ marginLeft: `-${listItemPadding}` }}
        itemSize={48}
        height={maxHeight - 15}
        width={`calc(100% + ${listItemPadding})`}
        itemCount={list.length}
        itemData={{
          list,
          values,
          onChange,
        }}
      >
        {ListItem}
      </VirtualizedList>
    </ParameterList>
  );
};
