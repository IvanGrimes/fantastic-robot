import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTheme } from '@material-ui/styles';
import { getBreakpoints } from '@theme/breakpoints';
import { Theme } from '@theme/types';
import * as ui from '@modules/ui';
import { useToggle } from '@hooks/useToggle';
import * as details from '../../../details';
import { DesktopReserve, DesktopReserveProps } from './DesktopReserve';
import { TabletReserve } from './TabletReserve';
import { MobileReserve } from './MobileReserve';

const { Hidden, hooks: { useMediaQuery } } = ui

export type Reserve = DesktopReserveProps & {
  largeTabletQuery: string;
  rooms: ReturnType<typeof details.selectors.getRooms>;
};
// TODO: Refactor
export const Reserve = ({ room, rooms, isLoading }: Reserve) => {
  const theme = useTheme<Theme>();
  const [roomId, setRoomId] = useState('');
  const handleChangeRoomId = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) =>
      setRoomId(ev.target.value as string),
    []
  );
  const selectedRoom = useMemo(
    () => room || rooms.filter(roomItem => roomItem.id === roomId)[0],
    [room, roomId, rooms]
  );
  const tabletQuery = `(min-width: 1100px), (max-width: ${
    getBreakpoints({ theme }).values.sm
  }px)`;
  const mobileQuery = `(min-width: ${getBreakpoints({ theme }).values.sm}px)`;
  const tabletMatches = !useMediaQuery(tabletQuery);
  const mobileMatches = !useMediaQuery(mobileQuery);
  const tablet = useToggle();
  const mobile = useToggle();

  useEffect(() => {
    if (mobile.isVisible && !mobileMatches) {
      mobile.handleClose();
    }
  }, [mobile, mobileMatches]);

  useEffect(() => {
    if (tablet.isVisible && !tabletMatches) {
      tablet.handleClose();
    }
  }, [tablet, tabletMatches]);

  useEffect(() => {
    if (rooms.length) {
      setRoomId(rooms[0].id);
    }
  }, [rooms]);

  return (
    <>
      <Hidden query="(max-width: 1100px)">
        <DesktopReserve room={selectedRoom} isLoading={isLoading} />
      </Hidden>
      <Hidden query={tabletQuery}>
        <TabletReserve
          isLoading={isLoading}
          room={selectedRoom}
          isVisible={tablet.isVisible}
          handleClose={tablet.handleClose}
          handleChangeRoomId={handleChangeRoomId}
          handleOpen={tablet.handleOpen}
          rooms={rooms}
          roomId={roomId}
        />
      </Hidden>
      <Hidden query={mobileQuery}>
        <MobileReserve
          isLoading={isLoading}
          room={selectedRoom}
          isVisible={mobile.isVisible}
          handleClose={mobile.handleClose}
          handleChangeRoomId={handleChangeRoomId}
          handleOpen={mobile.handleOpen}
          rooms={rooms}
          roomId={roomId}
        />
      </Hidden>
    </>
  );
};
