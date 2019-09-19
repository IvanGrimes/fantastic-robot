import { StudioListItemProps } from '../index';
import { DataState } from '../../../../studioData/model/reducer';

export type StudioListItemStationsProps = Required<
  Pick<StudioListItemProps, 'stationIds'>
> & {
  isLoading: boolean;
  list: DataState['metroList'];
};

export * from './StudioListItemStations';
