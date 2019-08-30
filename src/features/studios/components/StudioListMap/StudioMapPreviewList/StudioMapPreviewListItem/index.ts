import { ShortStudio } from '../../../../model/types';

export type StudioMapPreviewListItemProps = {
  isActive: boolean;
  handleClose?: () => void;
  item: ShortStudio;
};

export * from './StudioMapPreviewListItem';
