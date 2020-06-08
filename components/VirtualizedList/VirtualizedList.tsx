import React, { ComponentType, CSSProperties } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

export type VirtualizedListProps = {
  style?: CSSProperties;
  itemSize: number;
  height: string | number;
  width: string | number;
  itemCount: number;
  children: ComponentType<VirtualizedListItemProps>;
  itemData: any;
};

export type VirtualizedListItemProps = ListChildComponentProps;

export const VirtualizedList: StyleableComponent<VirtualizedListProps> = ({
  className = '',
  style,
  itemSize,
  itemCount,
  width,
  height,
  children,
  itemData,
}) => (
  <List
    className={className}
    style={style}
    itemSize={itemSize}
    height={height}
    itemCount={itemCount}
    width={width}
    itemData={itemData}
  >
    {children}
  </List>
);
