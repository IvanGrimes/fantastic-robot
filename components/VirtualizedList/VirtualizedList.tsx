import React, { ComponentType, FunctionComponent } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

export type VirtualizedListProps = {
  itemSize: number;
  height: string | number;
  width: string | number;
  itemCount: number;
  children: ComponentType<VirtualizedListItemProps>;
};

export type VirtualizedListItemProps = ListChildComponentProps;

export const VirtualizedList: FunctionComponent<VirtualizedListProps> = ({
  itemSize,
  itemCount,
  width,
  height,
  children,
}) => (
  <List itemSize={itemSize} height={height} itemCount={itemCount} width={width}>
    {children}
  </List>
);
