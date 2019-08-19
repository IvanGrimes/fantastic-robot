import { ReactNode } from 'react';

export type FilterPropertyListProps = {
  title: string;
  list: {
    id: string;
    name: string;
  }[];
  selectedIds: string[];
  onChange: (id: any[]) => () => void;
  renderName?: (props: { [key: string]: any }) => ReactNode;
  searchable?: boolean;
  searchProps?: {
    label?: string;
    placeholder?: string;
  };
};

export { FilterPropertyList } from './FilterPropertyList';
