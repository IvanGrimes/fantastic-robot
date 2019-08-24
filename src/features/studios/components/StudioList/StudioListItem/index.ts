import { ShortStudio } from '../../../model/types';

export type StudioListItemProps = Partial<ShortStudio> & {
  loading: boolean;
  toggleFavorite: () => void;
};

export { StudioListItem } from './StudioListItem';
