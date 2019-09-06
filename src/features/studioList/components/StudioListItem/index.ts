import { ShortStudio } from '../../model/types';

export type StudioListItemVariant = 'wide' | 'short';

type StudioListItemLoading = Partial<ShortStudio> & {
  loading: true;
};

type StudioListItem = Required<ShortStudio> & {
  loading: false;
};

type StudioListItemPersist = {
  handleToggleFavorite: (id: string) => void;
  variant: StudioListItemVariant;
};

export type StudioListItemViewProps = (StudioListItemLoading | StudioListItem) &
  StudioListItemPersist;

export type StudioListItemProps = StudioListItemViewProps & {
  variant: StudioListItemVariant;
};

export { StudioListItem } from './StudioListItem';
