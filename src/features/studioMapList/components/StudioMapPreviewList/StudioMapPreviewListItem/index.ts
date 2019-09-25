import { StudioItem } from '../../../../studioList/model/types';

export type StudioMapPreviewListItemProps = {
  isActive: boolean;
  handleClose?: () => void;
  item: StudioItem;
};

export * from './StudioMapPreviewListItem';
