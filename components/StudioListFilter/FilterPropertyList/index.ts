import { ReactNode } from "react";

export type FilterPropertyListProps = {
  list: {
    id: string;
    name: string;
  }[];
  selectedIds: string[];
  onChange: (id?: string) => () => void;
  renderName?: (props: { [key: string]: any; }) => ReactNode;
};

export { FilterPropertyList } from './FilterPropertyList';
