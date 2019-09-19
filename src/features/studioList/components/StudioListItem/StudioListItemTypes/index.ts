import { StudioListItemProps } from '../index';
import { DataState } from '../../../../studioData/model/reducer';

export type StudioListItemTypesProps = Required<
  Pick<StudioListItemProps, 'interiorIds'>
> & {
  isLoading: boolean;
  list: DataState['config']['interior'];
};

export * from './StudioListItemInteriors';
