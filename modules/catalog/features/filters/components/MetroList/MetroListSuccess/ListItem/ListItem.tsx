import React, { FunctionComponent } from 'react';
import { VirtualizedListItemProps, Checkbox } from '@components';
import { Metro } from '@model';
import { ListProps } from '../types';

export const ListItem: FunctionComponent<
  Omit<VirtualizedListItemProps, 'data'> & { data: ListProps & { list: Metro } }
> = ({ index, style, data }) => {
  const { values, onChange, list } = data;
  const { name, id } = list[index];

  return (
    <div style={{ ...style, left: '12px', width: 'calc(100% - 12px)' }}>
      <Checkbox
        label={name}
        checked={values[id]}
        onChange={() => onChange(id)}
      />
    </div>
  );
};
