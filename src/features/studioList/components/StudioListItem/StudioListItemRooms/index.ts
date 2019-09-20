import { StudioListItemProps } from '../index';

export type StudioListItemRoomsProps = Required<
  Pick<StudioListItemProps, 'roomsCount'>
>;

export * from './StudioListItemRooms';
