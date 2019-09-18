import { StudioListItemProps } from '../index';

export type StudioListItemStationsProps = Required<
  Pick<StudioListItemProps, 'stationIds'>
>;

export * from './StudioListItemStations';
