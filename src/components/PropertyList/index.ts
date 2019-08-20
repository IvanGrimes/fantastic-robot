import { ReactNode } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export type PropertyListProps = Pick<GridProps, 'justify'> &
  Pick<GridProps, 'alignItems'> &
  Pick<GridProps, 'direction'> & {
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
    variant?: 'chip' | 'checkbox';
  };

export { PropertyList } from './PropertyList';
