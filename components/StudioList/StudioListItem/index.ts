import { ShortStudio } from '../../../redux/data/types';

export type StudioListItemProps = ShortStudio & {
  loading: boolean;
};

export { StudioListItem } from './StudioListItem';
