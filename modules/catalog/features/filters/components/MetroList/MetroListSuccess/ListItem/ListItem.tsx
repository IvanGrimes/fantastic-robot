import React, { FunctionComponent } from 'react';
import { VirtualizedListItemProps } from '@components';
import { Metro } from '@model';
import { ListProps } from '../types';
import { ParameterListItem, listItemPadding } from '../../../ParameterList';

export const ListItem: FunctionComponent<
  Omit<VirtualizedListItemProps, 'data'> & { data: ListProps & { list: Metro } }
> = ({ index, style, data }) => {
  const { values, onChange, list } = data;
  const { name, id } = list[index];

  return (
    <div
      style={{
        ...style,
        width: `calc(100% - ${listItemPadding})`,
      }}
    >
      <ParameterListItem
        name={name}
        value={Boolean(values[id])}
        onChange={() => onChange(id)}
      />
    </div>
  );
};
