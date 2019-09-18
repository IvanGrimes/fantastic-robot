import { ReactNode } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export type ChipListProps = GridProps & {
  list: Array<
    | {
        id: string;
        value: string;
      }
    | undefined
  >;
  selectedListId: string[];
  handleToggle: (id: string) => void;
  renderValue?: (props: { [key: string]: any }) => ReactNode;
};

export { ChipList } from './ChipList';
