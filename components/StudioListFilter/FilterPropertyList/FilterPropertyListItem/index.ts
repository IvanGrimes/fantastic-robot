import { ReactNode } from 'react';

export type FilterPropertyListItemProps = {
  id: string;
  name: string;
  onChange: (id?: string) => () => void;
  isActive: boolean;
  renderName?: (props: { [key: string]: any }) => ReactNode;
};
