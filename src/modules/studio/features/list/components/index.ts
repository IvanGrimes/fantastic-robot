import dynamic from 'next/dynamic';

import { StudioListItemVariant } from './StudioListItem';

export type ListProps = {
  className?: string;
  listItemVariant: StudioListItemVariant;
};

export const List = dynamic<ListProps>(() =>
  import('./ListContainer').then(module => module.ListContainer)
);
