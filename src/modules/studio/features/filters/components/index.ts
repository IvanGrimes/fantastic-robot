import dynamic from 'next/dynamic';

export type ListFilterProps = {
  className?: string;
};

export const ListFilter = dynamic<ListFilterProps>(() =>
  import('./ListFilterContainer').then(module => module.ListFilterContainer)
);
