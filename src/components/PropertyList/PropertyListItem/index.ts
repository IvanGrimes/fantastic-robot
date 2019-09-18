import { ReactNode } from 'react';

export type PropertyListItemProps = {
  id: string;
  name: string;
  onChange: (id: string[]) => () => void;
  isActive: boolean;
  renderValue?: (props: { [key: string]: any }) => ReactNode;
};

export { PropertyListItem } from './PropertyListItem';
