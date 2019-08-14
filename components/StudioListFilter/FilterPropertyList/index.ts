import { ReactNode } from "react";

export type FilterPropertyListProps = {
  title: string;
  list: {
    id: string;
    name: string;
  }[];
  selectedIds: string[];
  onChange: (id?: string) => () => void;
  renderName?: (props: { [key: string]: any; }) => ReactNode;
};

export { FilterPropertyList } from './FilterPropertyList';
