import { StudioItemResponse } from '../../../../../controllers/studio/types';

export type StudioMapPreviewListItemProps = {
  isActive: boolean;
  handleClose?: () => void;
  item: StudioItemResponse;
};

export * from './StudioMapPreviewListItem';
