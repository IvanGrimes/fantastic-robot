import { FunctionComponent } from 'react';
import { RoomListServiceProps } from '../../../internal';
import { renderService } from '../../../../../model';
import { RoomListLoading } from './RoomListLoading';
import { RoomListFail } from './RoomListFail';
import { RoomListSuccess } from './RoomListSuccess';

export const RoomList: FunctionComponent<{
  service: RoomListServiceProps;
}> = ({ service }) =>
  renderService(service, {
    Loading: RoomListLoading,
    Fail: RoomListFail,
    Success: RoomListSuccess,
  });
