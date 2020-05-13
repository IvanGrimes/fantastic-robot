import {
  GetEntityName,
  RoomEntity,
  StudioEntity,
} from '../../../../model/entities';
import {
  RoomListServiceProps,
  StudioListServiceProps,
} from '../../model/services';

export type { StudioListServiceProps, RoomListServiceProps };

export type Variant = GetEntityName<StudioEntity> | GetEntityName<RoomEntity>;

export type ServiceProps =
  | {
      studioList: StudioListServiceProps;
      roomList?: undefined;
    }
  | {
      studioList?: undefined;
      roomList: RoomListServiceProps;
    };
