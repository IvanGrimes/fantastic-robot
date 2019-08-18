import { ReactNode } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export type ChipListProps = GridProps & {
  list: {
    id: string;
    name: string;
  }[];
  selectedListId: string[];
  handleToggle: (id: string) => void;
  renderName?: (props: { [key: string]: any }) => ReactNode;
};

export { ChipList } from './ChipList';
