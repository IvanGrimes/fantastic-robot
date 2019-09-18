import { ReactNode } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export type ChipListProps = GridProps & {
  list: {
    id: string;
    value: string;
  }[];
  selectedListId: string[];
  handleToggle: (id: string) => void;
  renderValue?: (props: { [key: string]: any }) => ReactNode;
};

export { ChipList } from './ChipList';
