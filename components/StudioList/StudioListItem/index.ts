import { ShortStudio } from '../../../redux/studios/types';

export type StudioListItemProps = Partial<ShortStudio> & {
  loading: boolean;
};

export { StudioListItem } from './StudioListItem';
