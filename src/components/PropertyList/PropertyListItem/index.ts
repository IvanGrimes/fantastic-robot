import { ReactNode } from 'react';
import { ListChildComponentProps } from 'react-window';
import { PropertyListType } from '../index';

export type PropertyListItemProps = ListChildComponentProps & {
  data: {
    onChange: (id: string[]) => () => void;
    isActive: boolean;
    renderValue?: (props: { [key: string]: any }) => ReactNode;
    selectedIds: string[];
    list: PropertyListType;
  };
};

export { PropertyListItem } from './PropertyListItem';
