import dynamic from 'next/dynamic';
import { ListItemVariant } from './ListItem';

export * from './ListItem';

export type ListProps = {
  className?: string;
  variant: ListItemVariant;
};

export const List = dynamic<ListProps>(() =>
  import('./ListContainer').then(module => module.ListContainer)
);
