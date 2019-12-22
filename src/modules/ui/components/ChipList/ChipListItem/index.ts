import { ChipListProps } from '../index';

export type ChipListItemProps = ChipListProps['list'][number] &
  Pick<ChipListProps, 'renderValue'> & {
    handleToggle: () => void;
    isActive: boolean;
  };

export { ChipListItem } from './ChipListItem';
