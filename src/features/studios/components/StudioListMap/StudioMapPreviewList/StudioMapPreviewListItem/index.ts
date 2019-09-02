import { ShortStudio } from '../../../../model/types';
import { StudioListItemProps } from '../../../StudioList/StudioListItem';

export type StudioMapPreviewListItemProps = Pick<
  StudioListItemProps,
  'handleToggleFavorite'
> & {
  isActive: boolean;
  handleClose?: () => void;
  item: ShortStudio;
};

export * from './StudioMapPreviewListItem';
