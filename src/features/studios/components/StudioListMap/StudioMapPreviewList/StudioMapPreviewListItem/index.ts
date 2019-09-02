import { StudioListItemProps } from '../../../../../studioList/components/StudioListItem';
import { ShortStudio } from '../../../../../studioList/model/types';

export type StudioMapPreviewListItemProps = Pick<
  StudioListItemProps,
  'handleToggleFavorite'
> & {
  isActive: boolean;
  handleClose?: () => void;
  item: ShortStudio;
};

export * from './StudioMapPreviewListItem';
