import React, { FunctionComponent } from 'react';
import { VirtualizedListItemProps } from '@components';
import { MetroList } from '@shared';
import { ParameterListItem } from '../../ParameterList';
import { Wrapper, StationColor } from './ListItem.styles';

export const ListItem: FunctionComponent<
  Omit<VirtualizedListItemProps, 'data'> & {
    data: {
      values: { [key: string]: boolean };
      list: MetroList;
      onChange: (value: string) => void;
    };
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
