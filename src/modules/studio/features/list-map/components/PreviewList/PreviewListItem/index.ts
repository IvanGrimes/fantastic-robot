import { StudioItem } from '../../../../list';

export type PreviewListItemProps = {
  isActive: boolean;
  handleClose?: () => void;
  item: StudioItem;
};

export * from './PreviewListItem';
