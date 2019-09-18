import { StudioListItemProps } from '../index';

export type StudioListItemRoomsProps = Required<
  Pick<StudioListItemProps, 'stationIds'>
>;

export * from './StudioListItemRooms';
