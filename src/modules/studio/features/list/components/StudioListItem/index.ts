import { StudioItem } from '../../model/types';

export type StudioListItemVariant = 'wide' | 'short';

type StudioListItemLoading = {
  loading: true;
} & Partial<StudioItem>;

type StudioListItemType = {
  loading: false;
} & Required<StudioItem>;

type StudioListItemPersist = {
  variant: StudioListItemVariant;
};

export type StudioListItemViewProps = (
  | StudioListItemLoading
  | StudioListItemType
) &
  StudioListItemPersist;

export type StudioListItemProps = StudioListItemViewProps & {
  variant: StudioListItemVariant;
};

export { StudioListItemContainer as StudioListItem } from './StudioListItemContainer';
