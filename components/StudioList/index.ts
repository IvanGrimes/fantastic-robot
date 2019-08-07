import { ShortStudio } from '../../redux/data/types';

export type StudioListProps = {
  list: ShortStudio[];
  loading: boolean;
  error: string;
};

export { StudioList } from './StudioList';
