import { ShortStudio } from '../../redux/studios/types';

export type StudioListProps = {
  className?: string;
  list: ShortStudio[];
  error: string;
};

export { StudioList } from './StudioList';
