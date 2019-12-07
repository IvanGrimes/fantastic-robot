import { StudioItem } from '../../../../studioList/model/types';

export type PreviewListItemProps = {
  isActive: boolean;
  handleClose?: () => void;
  item: StudioItem;
};

export * from './PreviewListItem';
