import React from 'react';
import { MetroServiceProps, SuccessComponent } from '@model';
import { VirtualizedList } from '@components';
import { MetroListProps } from './types';

export const MetroListSuccess: SuccessComponent<
  MetroServiceProps,
  MetroListProps
> = ({ service, values, onChange }) => {
  const list = service.data.getData();

  return (
    <VirtualizedList
      itemSize={35}
      height={350}
      width="100%"
      itemCount={list.length}
    >
      {({ index, style }) => {
        const { id, name } = list[index];

        return (
          <div style={style}>
            <input
              type="checkbox"
              checked={values[id]}
              onChange={() => onChange(id)}
            />
            {name}
          </div>
        );
      }}
    </VirtualizedList>
  );
};
