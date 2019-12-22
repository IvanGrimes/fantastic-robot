import { StudioItem } from '../../../../list';
import { ListItemPersist } from '../../../../list/components/ListItem';

export type PreviewListDataProps = Omit<
  Omit<ListItemPersist, 'loading'>,
  'variant'
>;

export type PreviewListItemProps = PreviewListDataProps & {
  isActive: boolean;
  handleClose?: () => void;
  item: StudioItem;
};

export * from './PreviewListItem';
