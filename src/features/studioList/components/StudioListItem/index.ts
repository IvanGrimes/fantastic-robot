import { StudioItem } from '../../model/api';

export type StudioListItemVariant = 'wide' | 'short';

type StudioListItemLoading = Partial<StudioItem> & {
  loading: true;
};

type StudioListItemType = Required<StudioItem> & {
  loading: false;
};

type StudioListItemPersist = {
  variant: StudioListItemVariant;
};

export type StudioListItemViewProps = (
  | StudioListItemLoading
  | StudioListItemType) &
  StudioListItemPersist;

export type StudioListItemProps = StudioListItemViewProps & {
  variant: StudioListItemVariant;
};

export {
  StudioListItemContainer as StudioListItem,
} from './StudioListItemContainer';
