export type FilterPropertyListProps = {
  list: {
    id: string;
    name: string;
  }[];
  selectedIds: string[];
  onChange: (id?: string) => () => void;
};

export { FilterPropertyList } from './FilterPropertyList';
