import { StudioItemResponse } from '../../../../controllers/studio/types';

export type StudioListItemVariant = 'wide' | 'short';

type StudioListItemLoading = Partial<StudioItemResponse> & {
  loading: true;
};

type StudioListItemType = Required<StudioItemResponse> & {
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
