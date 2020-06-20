import React, { FunctionComponent } from 'react';
import { VirtualizedListItemProps } from '@components';
import { MetroList } from '@shared';
import { ListProps } from '../types';
import { ParameterListItem } from '../../../ParameterList';
import { Wrapper, StationColor } from './ListItem.styles';

export const ListItem: FunctionComponent<
  Omit<VirtualizedListItemProps, 'data'> & {
    data: ListProps & { list: MetroList };
  }
> = ({ index, style, data }) => {
  const { values, onChange, list } = data;
  const { name, id, color } = list[index];

  return (
    <Wrapper style={style}>
      <ParameterListItem
        name={name}
        value={Boolean(values[id])}
        onChange={() => onChange(id)}
      />
      <StationColor color={color} />
    </Wrapper>
  );
};
