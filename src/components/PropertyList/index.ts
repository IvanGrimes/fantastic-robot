import { ReactNode } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export type PropertyListProps = Pick<GridProps, 'justify'> &
  Pick<GridProps, 'alignItems'> &
  Pick<GridProps, 'direction'> & {
    className?: string;
    title: string;
    list: Array<
      | {
          id: string;
          value: string;
        }
      | undefined
    >;
    selectedIds: string[];
    onChange: (id: any[]) => () => void;
    renderValue?: (props: { [key: string]: any }) => ReactNode;
    isClearable?: boolean;
    isSearchable?: boolean;
    searchProps?: {
      label?: string;
      placeholder?: string;
    };
    variant?: 'chip' | 'checkbox';
  };

export { PropertyList } from './PropertyList';
