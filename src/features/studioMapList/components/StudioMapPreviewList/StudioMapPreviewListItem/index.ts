import { StudioItem } from '../../../../studioList/model/api';

export type StudioMapPreviewListItemProps = {
  isActive: boolean;
  handleClose?: () => void;
  item: StudioItem;
};

export * from './StudioMapPreviewListItem';
