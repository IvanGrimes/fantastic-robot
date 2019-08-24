import { ShortStudio } from '../../../model/types';

export type StudioListItemVariant = 'wide' | 'short';

export type StudioListItemViewProps = Partial<ShortStudio> & {
  loading: boolean;
  handleToggleFavorite: () => void;
  variant: StudioListItemVariant;
};

export type StudioListItemProps = StudioListItemViewProps & {
  variant: StudioListItemVariant;
};

export { StudioListItem } from './StudioListItem';
