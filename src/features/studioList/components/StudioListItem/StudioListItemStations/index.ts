import { StudioListItemProps } from '../index';
import { DataState } from '../../../../studioData/model/reducer';

export type StudioListItemStationsProps = Required<
  Pick<StudioListItemProps, 'stationIds'>
> & {
  list: DataState['metroList'];
};

export * from './StudioListItemStations';
